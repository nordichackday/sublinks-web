/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'ProgrammeList',


    clickHandler: function () {

      $.ajax({
        url: 'http://www.svt.se/play4api/video/2963924?pretty=true',
        dataType: 'json',
        timeout: 3000,
        success: function(data) {
            this.setState({
            data: data
            });
       }.bind(this),
       error: function(xhr, status, err) {
         console.log("error mot api");
         //noinspection BadExpressionStatementJS
           this.clickHandler;
       }.bind(this)
      });


    },
    render: function() {
        return (
        <div>

    <div onClick={this.clickHandler}>Knapp</div>

    ProgrammeList


        </div>

      );

    }

});
