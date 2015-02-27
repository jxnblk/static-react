
var fs = require('fs');
var path = require('path');
require('node-jsx').install();

var data = require('./data');
var Root = require('./src/root.jsx');

Root.getRoutes()
  .forEach(function(route) {
    var html = Root.renderToString(data, route.path);
    console.log('html', html);
    //var dir = route.path.replace(/^\//, '');
    dir = '.' + route.path + '/';
    if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }
    fs.writeFileSync(path.join(__dirname, dir + 'index.html'), html);
  });

