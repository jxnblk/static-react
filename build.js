// Builds static HTML files from Root component and routes option

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var React = require('react');
var Router = require('react-router');
require('node-jsx').install();

var routes = require('./routes.jsx');


module.exports = function(options) {

  var options = options || {};
  _.defaults(options, {
    baseUrl: '',
    routes: [],
    redirects: [],
    props: {},
    dest: './',
    Root: false,
    Default: false,
  });

  options.routes.map(function(route) {
    Router.run(routes(options), options.baseUrl + route.path, function(Handler, state) {
      var html = React.renderToString(React.createElement(Handler, options.props));
      var dir = path.join(__dirname, options.dest + route.path + '/');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      var filename = dir + 'index.html';
      fs.writeFileSync(filename, html);
      console.log('HTML written to ', filename);
    });
  });

}

