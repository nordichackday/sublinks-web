/** @jsx React.DOM */
'use strict';

var React = require('react');
var request = require('superagent');

var LinkObject = require('./linkobject.jsx');

var fakedata = [{"time":8,"word":"Margit Silberstein"},
            {"time":9,"word":"Anna Kinberg Batra"},
            {"time":30,"word":"Jonas Sjöstedt"},
            {"time":35,"word":"Fredrik Reinfeldt"},
            {"time":64,"word":"Stefan Löfvén"}];

var realData;
request.
    get('http://sublinks-filter.herokuapp.com/?sublink_url=http://media.svt.se/download/mcc/wp3/undertexter-wsrt/1368236/PG-1368236-001A-DENENDAVAGENS-01.wsrt').
    end(function (err, res) {
        console.log('Got it' + res.body);
        if (res.ok) {
            realData = res.body;
        }
    });


module.exports = React.createClass({
    displayName: 'LinkList',
    getInitialState:function(){
        return {
            data: []
        }
    },
    componentWillMount: function() {
        // TODO: Only works in client, make it work on both server and client
        console.log('componentDidMount');
        if (this.props.demo) {
            console.log('Using demo keywords');
            this.setState({data: fakedata});
        } else {
            console.log('Using real data of size ' + realData.length);
            this.setState({data: realData});
        }
    },
    render: function() {
        console.log('Using data of size: ' + this.state.data.length);
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
