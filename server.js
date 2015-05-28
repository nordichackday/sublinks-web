var express = require( 'express');
var request = require('superagent');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static(__dirname+'/public'));

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, response) {
    if (req.query.svtplayid === undefined) {
        response.send('You loose');
        return;
    }

    console.log(req.query.svtplayid);

    request.get("http://www.svt.se/play4api/video/" + req.query.svtplayid).end(function(err, video) {
        if (video.ok) {
            request.get("http://sublinks-filter.heroku.com/?sublink_url=" + video.body.subtitles[0].url).end(function(err, subtext) {
                response.render('index');
            });
        } else {
            console.log(video.text);
            response.send(video.text);
        }
    });
});

var port = process.env.PORT || 5000;
console.log("Listening on port " + port);
app.listen(port);
