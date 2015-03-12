
var React = require('react');
var _ = require('lodash');
var Router = require('react-router');
var routes = require('./routes.jsx');

module.exports = function(options) {

  var options = options || {};
  _.defaults(options, {
    baseUrl: '/',
    routes: [],
    redirects: [],
    props: {},
    dest: './',
    Root: false,
    Default: false,
  });

  console.log('app options', options);

  return Router.run(routes(options), Router.HistoryLocation, function(Handler, state) {
      React.render(React.createElement(Handler, window.INITIAL_PROPS), document);
  });

};

