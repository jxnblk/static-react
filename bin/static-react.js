#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var colors = require('colors');

var version = require('../package.json').version;
var build = require('..').build;
var client = require('..').client;

var options = {};
var dir = process.cwd();
var pkgPath = path.join(dir, './package.json');
if (fs.existsSync(pkgPath)) {
  var pkg = fs.readFileSync(pkgPath, 'utf8');
  options = JSON.parse(pkg)['static-react'] || {};
  console.log('options', options);
}



program
  .version(version)
  .option('[Root] [dest]', 'Path to Root react component and destination folder')
  .option('-o, --output [output]', 'Destination directory')
  .option('-n, --noscript [noscript]', 'Use React.renderToStaticMarkup method')
  .parse(process.argv);


if (program.args) {


  var noscript = program.noscript;
  // Set defaults
  var rootSource = program.args[0];
  var dest;
  var html;

  if (program.args[1]) {
    dest = path.join(dir, program.args[1]);
  } else if (program.output) {
    dest = path.join(dir, program.output);
  } else {
    dest = dir;
  }

  if (rootSource) {
    options.Root = require(path.join(dir, rootSource));
  } else if (options.Root) {
    options.Root = require(path.join(dir, options.Root));
  } else if (options.config) {
    var config = require(path.join(dir, options.config));
    options.Root = config.Root || false;
  }

  if (!options.Root) {
    console.log('No root component provided'.red);
    return false;
  }

  if (typeof noscript !== 'undefined') {
    console.log('bin noscript is defined ', noscript);
    options.noScript = noscript;
  }

  var config = require(path.join(dir, options.config));
  console.log(config);
  try {
    html = build(config);
    //html = build(options);
  } catch(e) {
    console.log('Could not build HTML'.red);
    console.log(e.red);
    return false;
  }

  try {
    var filename = path.join(dir, './index.html');
    fs.writeFileSync(filename, html);
    console.log(('File written to ' + filename).green);
  } catch(e) {
    console.log(('Could not write file to ' + filename).red.bold);
    console.log(e.red);
  }

  var entryString = [
    'var React = require("react");',
    'console.log("static-react cli client");',
    'var options = require("' + options.config + '");',
    'require("static-react").client("options");',
  ].join('\n'); 


  console.log(entryString);
  try {
    var filename = path.join(dir, './entry.js');
    fs.writeFileSync(filename, entryString);
  } catch(e) {
    console.log(('Could not write file to ' + filename).red);
    console.log(e.red);
    return false;
  }

  var webpack = require('webpack');

  try {
    console.log('try webpack');
    console.log(process.cwd(), dir);
    webpack({
      entry: './entry.js',
      output: {
        path: dir,
        filename: 'bundle.js',
        //pathinfo: true,
      },
      module: {
        loaders: [
          { test: /\.jsx$/, loader: "jsx-loader" }
        ]
      },
      resolve: {
        root: dir,
        fallback: [
          process.cwd(),
          dir,
          dest,
        ]
      }
    }, function(err, stats) {
      if (err) {
        console.log(err.red);
      }
      //console.log(stats);
      console.log('webpack finished');
    });
  } catch(e) {
    console.log('webpack failed'.red);
    console.log(e.red);
  }



}
