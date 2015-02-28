
var fs = require('fs');
var path = require('path');
require('node-jsx').install();

var data = require('./data');
var Root = require('./src/root.jsx');

Root.getRoutes()
  .forEach(function(route) {
    data.path = route.path;
    var html = Root.renderToString(data);
    var dir = '.' + route.path + '/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(path.join(__dirname, dir + 'index.html'), html);
  });

