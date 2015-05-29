/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require( 'react-router');
var RouteHandler = Router.RouteHandler;

var VideoPlayer = require('./videoplayer.jsx');
var LinkList = require('./linklist.jsx');
var ProgrammeList = require('./programmelist.jsx');

module.exports = React.createClass({
    displayName: 'AppThing',
    render: function() {
        return (
            <div>
                <div className="header">Nordic Hack Day</div>
                <VideoPlayer svtplayid={this.props.svtplayid}/>
                <LinkList />
                <ProgrammeList />
            </div>

        );

    }

});
