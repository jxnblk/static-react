// Example custom build script

var fs = require('fs');
var path = require('path');
var build = require('../../build');
var options = require('./config');
var html = build(options);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

