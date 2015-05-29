/** @jsx React.DOM */
'use strict';

var React = require('react');

var LinkObject = require('./linkobject.jsx');

var linknode;
var response = [{"time":4,"word":"Håkan Juholt"},
                {"time":9,"word":"Fredrik Reinfeldt"},
                {"time":18,"word":"Jan Björklund"},
                {"time":793,"word":"Göran Hägglund"},
                {"time":1159,"word":"Lars Magnusson"},
                {"time":1342,"word":"John Maynard"},
                {"time":1403,"word":"Kristina Boréus"},
                {"time":2257,"word":"Thomas Piketty"},
                {"time":2440,"word":"Thomas Pikettys"}];

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
            console.log(wikiurl);



               return (
                 <div key={i}>
                   <LinkObject name={text.word} source="Wikipedia" url={wikiurl} starttime={text.time}/>

                    </div>
                      )
             })
            }
        </div>
      );
    }
});
