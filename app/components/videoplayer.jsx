/** @jsx React.DOM */
'use strict'
var React = require('react')

var videoid = decodeURIComponent(window.location.search.substring(1).split("&")[0].split("=")[1]);

module.exports = React.createClass({
    displayName: 'VideoPlayer',

    render: function() {
        return (
        <div>


    <div dangerouslySetInnerHTML={
      {__html: '<iframe width="100%" height="700" src="http://www.svtplay.se/klipp/' + videoid + '?type=embed" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'}
      }
       />



        </div>

      );

    }

})
