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

// TODO: Do actual call. Will need Flux or react-async or similar
var realData = [{"time":8,"word":"Margit Silberstein"},
    {"time":9,"word":"Anna Kinberg Batra"},
    {"time":30,"word":"Jonas Sjöstedt"},
    {"time":35,"word":"Fredrik Reinfeldt"},
    {"time":64,"word":"Stefan Löfvén"}];


module.exports = React.createClass({
    displayName: 'LinkList',
    getInitialState:function(){
        return {
            data: []
        }
    },
    componentWillMount: function() {
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
