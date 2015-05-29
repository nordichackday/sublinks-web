/** @jsx React.DOM */
'use strict';

var React = require('react');
var request = require('superagent');

var LinkObject = require('./linkobject.jsx');

var linknode;

module.exports = React.createClass({
    displayName: 'LinkList',
    getInitialState:function(){
        return {
            data: null
        }
    },
    componentDidMount: function() {
        // TODO: Only works in client, make it work on both server and client
        if (this.props.demo) {
            this.setState({
                data: [{"time":8,"word":"Margit Silberstein"},
                    {"time":9,"word":"Anna Kinberg Batra"},
                    {"time":30,"word":"Jonas Sjöstedt"},
                    {"time":35,"word":"Fredrik Reinfeldt"},
                    {"time":64,"word":"Stefan Löfvén"}]
            });
        } else {
            var self = this;
            request.get('http://sublinks-filter.herokuapp.com/?sublink_url=http://media.svt.se/download/mcc/wp3/undertexter-wsrt/1368236/PG-1368236-001A-DENENDAVAGENS-01.wsrt').
                end(function (err, res) {
                    console.log('Got it');
                    if (res.ok) {
                        self.setState({
                            data: res.body
                        });
                    }
                });
        }
    },
    render: function() {
        if (!this.state.data) {
            return (
                <div className="linklist">
                </div>
            );
        }
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
});
