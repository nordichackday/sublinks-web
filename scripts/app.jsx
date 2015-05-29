/** @jsx React.DOM */
'use strict'
var React = require('react')
var VideoPlayer = require('./videoplayer')
var LinkList = require('./linklist')
var ProgrammeList = require('./programmelist')

module.exports = React.createClass({
    displayName: 'AppThing',
    render: function() {
        return (
        <div>
            <div className="header">Nordic Hack Day</div>
            <VideoPlayer />
            <LinkList />
            <ProgrammeList />
        </div>

      );

    }

})
