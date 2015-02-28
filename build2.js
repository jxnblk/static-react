
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var React = require('react');
require('node-jsx').install();

//var browserify = require('browserify');

var browserifyString = require('browserify-string');
var reactify = require('reactify');

module.exports = function() {

  var self = this;

  this.options = {};
  var options = options || {};

  this.setOptions = function(options) {
    _.assign(this.options, options);
  };

  this.renderStatic = function() {
    var rootDir = this.options.dir;
    var Root = React.createFactory(this.options.Root);
    var props = this.options.props;
    props.routes.map(function(route) {
      props.path = route.path;
      var dir = path.join(rootDir, '.' + route.path + '/');
      var html = '<!DOCTYPE html>';
      html += React.renderToString(Root(props));
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      var filename = route.filename || 'index.html';
      fs.writeFileSync(dir + filename, html);
    });
  };

  // Consider handling this a different way
  //this.renderClientScript = function(name, source) {
  //  function clientScript() {
  //    var React = require('react');
  //    var Root = React.createFactory(self.options.Root);
  //    React.
  //  };
  //  var scriptString = 'var React = require(\'react\');\n' + 
  //         'var ' + name + ' = React.createFactory(require(\'' + source + '\'));\n' +
  //         'React.render(' + name + '(window.INITIAL_PROPS), document)\n';
  //   var filename = path.join(rootDir, './client.js');
  //   fs.writeFileSync(filename, scriptString);
  //};
 
};

