// Builds static HTML files from Root component and routes option

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var React = require('react');
require('node-jsx').install();

module.exports = function(options) {

  var options = options || {};
  _.defaults(options, {
    props: {},
    Root: false,
    noScript: false,
  });

  var html;
  var Root = options.Root;

  try {
    if (options.noScript) {
      html = React.renderToStaticMarkup(React.createElement(Root, options.props));
    } else {
      html = React.renderToString(React.createElement(Root, options.props));
    }
  } catch(e) {
    console.error('static-react renderToString error');
    console.error(e);
  }

  html = '<!DOCTYPE html>\n' + html;

  return html;

  /* Move this to CLI
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    var filename = path.join(dir, 'index.html');
    fs.writeFileSync(filename, html);
    console.log('HTML written to ', filename);
  */

}

