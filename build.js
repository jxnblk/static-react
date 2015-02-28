
var fs = require('fs');
var path = require('path');
require('node-jsx').install();

var data = require('./data');
var Root = require('./src/root.jsx');
//var App = require('./src/app.jsx');

Root.getRoutes().forEach(function(route) {
    data.path = route.path;

    var html = Root.renderToString(data);
    var dir = '.' + route.path + '/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    var filename = 'index.html';
    fs.writeFileSync(path.join(__dirname, dir + filename), html);
  });

// Render 404
data.path = '404';
var html = Root.renderToString(data);
fs.writeFileSync(path.join(__dirname, './404.html'), html);

