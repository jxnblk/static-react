
var React = require('react');

//var Router = require('react-router-component');
//var Locations = Router.Locations;
//var Location = Router.Location;
//var NotFound = Router.NotFound;

var Head = require('./head.jsx');
var Header = require('./header.jsx');

// Views
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');

var RootMixin = require('./alt-root-mixin.jsx');

module.exports = React.createClass({
  mixins: [RootMixin],

  routes: [
    { path: '/', handler: Home },
    { path: '/about', handler: About },
  ],

  //render: function() {
  //  console.log(this.browserInitScriptObj);
  //  return (
  //    <div>
  //      <h1>app</h1>
  //    </div>
  //  )
  //}

});


