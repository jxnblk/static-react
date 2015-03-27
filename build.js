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
  });

  var Root = options.Root;

  try {
    var html = React.renderToString(React.createElement(Root, options.props));
  } catch(e) {
    console.error('static-react renderToString error');
    console.error(e);
  }

  return html;

  /* Put this in CLI
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    var filename = path.join(dir, 'index.html');
    fs.writeFileSync(filename, html);
    console.log('HTML written to ', filename);
  */

}

