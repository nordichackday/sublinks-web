require('node-jsx').install();

var merge = require('merge');
var express = require( 'express');
var React = require( 'react');
var Router = require( 'react-router');
var routes = require( './app/routes.jsx');

var app = express();

app.use(express.static(__dirname+'/public'));

app.use(function(req, res) {
    var svplayid = req.query.svtplayid;

    Router.run(routes, req.path, function(Handler, state) {
        // var reactHtml = React.renderToString(React.createElement(Handler, {path: req.path}));
        var reactHtml = React.renderToString(React.createElement(Handler, merge({svtplayid: svplayid}, state)));
        res.render('index.ejs', {reactOutput: reactHtml});
    });
});

var port = process.env.PORT || 5000;
console.log("Listening on port " + port);
app.listen(port);
