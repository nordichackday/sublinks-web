/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)
	var App = __webpack_require__(2)
	React.render(React.createElement(App, null), document.getElementById('content'))


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)
	var VideoPlayer = __webpack_require__(3)
	var LinkList = __webpack_require__(4)
	var ProgrammeList = __webpack_require__(6)

	module.exports = React.createClass({
	    displayName: 'AppThing',
	    render: function() {
	        return (
	        React.createElement("div", null, 
	            React.createElement("div", {className: "header"}, "Nordic Hack Day"), 
	            React.createElement(VideoPlayer, null), 
	            React.createElement(LinkList, null), 
	            React.createElement(ProgrammeList, null)
	        )

	      );

	    }

	})


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)

	var videoid = decodeURIComponent(window.location.search.substring(1).split("&")[0].split("=")[1]);

	module.exports = React.createClass({
	    displayName: 'VideoPlayer',

	    render: function() {
	        return (
	        React.createElement("div", null, 


	    React.createElement("div", {dangerouslySetInnerHTML: 
	      {__html: '<iframe width="100%" height="700" src="http://www.svtplay.se/video/' + videoid + '?type=embed" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'}
	      }
	       )



	        )

	      );

	    }

	})


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)
	var LinkObject = __webpack_require__(5)

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




	            // this.setState({
	            // data: response
	            // });

	      $.ajax({
	        url: 'http://sublinks-filter.herokuapp.com/?sublink_url=http://media.svt.se/download/mcc/wp3/undertexter-wsrt/1368236/PG-1368236-001A-DENENDAVAGENS-01.wsrt',
	        dataType: 'json',
	        timeout: 3000,
	        success: function(data) {
	            this.setState({
	            data: data
	            });
	       }.bind(this),
	       error: function(xhr, status, err) {
	         console.log("error mot api");
	        // this.componentWillMount();
	       }.bind(this)
	      });


	    },
	    componentDidMount: function() {

	    },
	    render: function() {


	        return (
	        React.createElement("div", {className: "linklist"}, 
	          this.state.data.map(function(text, i){
	            var namearray = text.word.split(' ');
	            var wikiurl = 'http://sv.wikipedia.org/wiki/' + namearray[0] + '_' + namearray[1];
	            console.log(wikiurl);



	               return (
	                 React.createElement("div", {key: i}, 
	                   React.createElement(LinkObject, {name: text.word, source: "Wikipedia", url: wikiurl, starttime: text.time})

	                    )
	                      )
	             })
	            
	        )
	      );
	    }
	})


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)


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
	        React.createElement("div", {style: divStyleOut, className: "linkobject"}, 
	                React.createElement("a", {href: wikiurl, style: divStyle, target: "_blank", className: " linkstyle linkelement "}, this.state.name, 
	                  React.createElement("span", {className: "blockelement"}, 
	                    React.createElement("span", {className: "linksource"}, this.props.source)
	                  )
	                )
	        )
	      );
	    }
	})


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)

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
	         this.clickHandler;
	       }.bind(this)
	      });


	    },
	    render: function() {
	        return (
	        React.createElement("div", null, 

	    React.createElement("div", {onClick: this.clickHandler}, "Knapp"), 

	    "ProgrammeList"


	        )

	      );

	    }

	})


/***/ }
/******/ ]);