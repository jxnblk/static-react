
var fs = require('fs');
var path = require('path');
//var React = require('react');
require('node-jsx').install();

var data = require('./data');
var Root = require('./src/root.jsx');

Root.getRoutes()
  .forEach(function(route) {
    data.route = route;
    var html = Root.renderToString(data);
    fs.writeFileSync(path.join(__dirname, route + 'index.html'), html);
  });

