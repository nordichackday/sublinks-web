/** @jsx React.DOM */
'use strict';

var React = require('react');


var wikiurl;
module.exports = React.createClass({
    displayName: 'LinkObject',
    getInitialState:function(){
      return {
        url: this.props.url,
        name:this.props.name,
        source: this.props.source,
        time: this.props.starttime,
        apiresponse:null
      }
    },
    componentDidMount: function() {
      var namearray = this.props.name.split(' ');
      var apiurl =
      'http://sv.wikipedia.org/w/api.php?format=json&action=query&generator=search&continue=&gsrnamespace=0&gsrsearch='
      + namearray[0] + '_' + namearray[1]
      + '&gsrlimit=1&prop=pageimages%7Cextracts&exintro&explaintext&exsentences=1&prop=info&inprop=url&callback=?';

      $.ajax({
        url: apiurl,
        dataType: 'json',
        timeout: 3000,
        success: function(data) {
            this.setState({
            apiresponse: data
            });
            console.log(data);
       }.bind(this),
       error: function(xhr, status, err) {
         console.log("error mot api");
       }.bind(this)
      });
    },
    componentDidUpdate: function(prevProps, prevState) {
        var preurl = this.state.apiresponse.query.pages;
          $.each(this.state.apiresponse.query.pages, function() {
           wikiurl = $(this)[0].canonicalurl;
      })
    },
    render: function() {

      console.log(wikiurl, this.state.name, this.props.name);

      var delayTime = (this.props.starttime).toString() + "s";
      var divStyle = {
        WebkitAnimationDelay: delayTime
      };

      var startdelay = parseInt(this.props.starttime) + 20;
      var delayTimeOut = startdelay.toString() + "s";
            var divStyleOut = {
              WebkitAnimationDelay: delayTimeOut
            };

        return (
        <div style={divStyleOut} className="linkobject">
                <a href={wikiurl} style={divStyle} target="_blank" className=" linkstyle linkelement ">{this.state.name}
                  <span className="blockelement">
                    <span className="linksource">{this.props.source}</span>
                  </span>
                </a>
        </div>
      );
    }
});