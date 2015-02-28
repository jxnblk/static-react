
var fs = require('fs');
var path = require('path');
var React = require('react');
require('node-jsx').install();

module.exports = function(options) {

  var options = options || {};

  var rootDir = options.dir;
  var Root = React.createFactory(options.Root);
  var props = options.props;

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

