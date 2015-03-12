
var React = require('react');
//var _ = require('lodash');
var Router = require('react-router');
var routes = require('./routes.jsx');

module.exports = function(options) {

  try {
    return Router.run(routes(options), Router.HistoryLocation, function(Handler, state) {
        React.render(React.createElement(Handler, window.INITIAL_PROPS), document);
    });
  } catch(e) {
    console.error('Router error');
    console.error(e);
  }

};

