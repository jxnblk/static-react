
var React = require('react');

var Router = require('react-router-component');

var Pages = Router.Pages;
var Page = Router.Page;

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var Link = Router.Link;

// Pages
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Locations contextual>
        <Location path="/" handler={Home} />
        <Location path="/about" handler={About} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    )
  }
});

