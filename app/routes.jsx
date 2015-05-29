var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app.jsx');

module.exports = (
    <Route name="app" path="/" handler={App}>
    </Route>
);
