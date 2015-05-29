/** @jsx React.DOM */
'use strict';

var React = require('react');

var LinkObject = require('./linkobject.jsx');

var linknode;
var response = [{"time":8,"word":"Margit Silberstein"},
                {"time":9,"word":"Anna Kinberg Batra"},
                {"time":30,"word":"Jonas Sjöstedt"},
                {"time":35,"word":"Fredrik Reinfeldt"},
                {"time":64,"word":"Stefan Löfvén"}];

module.exports = React.createClass({
    displayName: 'LinkList',
    getInitialState:function(){
        return {
            data: null
        }
    },
    componentWillMount: function() {
            this.setState({
            data: response
            });

      // $.ajax({
      //   url: 'http://sublinks-filter.herokuapp.com/?sublink_url=http://media.svt.se/download/mcc/wp3/undertexter-wsrt/1368236/PG-1368236-001A-DENENDAVAGENS-01.wsrt',
      //   dataType: 'json',
      //   timeout: 3000,
      //   success: function(data) {
      //       this.setState({
      //       data: data
      //       });
      //  }.bind(this),
      //  error: function(xhr, status, err) {
      //    console.log("error mot api");
      //   // this.componentWillMount();
      //  }.bind(this)
      // });


    },
    componentDidMount: function() {

    },
    render: function() {
        return (
        <div className="linklist">
          {this.state.data.map(function(text, i){
            var namearray = text.word.split(' ');
            var wikiurl = 'http://sv.wikipedia.org/wiki/' + namearray[0] + '_' + namearray[1];
            console.log(text, "");
               return (
                 <div key={i}>
                   <LinkObject name={text.word} source="Wikipedia" starttime={text.time}/>
                    </div>
                )
             })
            }
        </div>
      );
    }
})
