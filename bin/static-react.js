#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var colors = require('colors');

var version = require('../package.json').version;
var build = require('..').build;

var options = {};
var dir = process.cwd();
var pkgPath = path.join(dir, './package.json');
if (fs.existsSync(pkgPath)) {
  var pkg = fs.readFileSync(pkgPath, 'utf8');
  options = JSON.parse(pkg)['static-react'] || {};
}


program
  .version(version)
  .option('[Root] [dest]', 'Path to Root react component and destination folder')
  .option('-n, --noscript [noscript]', 'Use React.renderToStaticMarkup method')
  .parse(process.argv);


if (program.args) {

  var noscript = program.noscript;
  // Set defaults
  var rootSource = program.args[0];
  var dest = program.args[1];
  var html;

  options.Root = require(path.join(dir, rootSource));

  try {
    html = build(options);
  } catch(e) {
    console.log('Could not build HTML'.red);
    console.log(e.red);
  }

  try {
    fs.writeFileSync(dest + 'index.html', html);
    console.log(('File written to ' + dest + 'index.html').green);
  } catch(e) {
    console.log('Could not write file to ' + dest + 'index.html'.red.bold);
    console.log(e.red);
  }

}
