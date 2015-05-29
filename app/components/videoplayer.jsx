/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'VideoPlayer',

    render: function() {
        var videoid, videotype;
        if (this.props.svtplayid) {
            videoid = this.props.svtplayid;
        } else {
            videoid = decodeURIComponent(window.location.search.substring(1).split("&")[0].split("=")[1]);
        }
        if (this.props.videotype) {
            videotype = this.props.videotype;
        } else {
            videotype = decodeURIComponent(window.location.search.substring(1).split("&")[1].split("=")[1]);
        }

        return (
        <div>


    <div dangerouslySetInnerHTML={
      {__html: '<iframe width="100%" height="700" src="http://www.svtplay.se/' + videotype + '/' + videoid + '?type=embed" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'}
      }
       />



        </div>

      );

    }

});
