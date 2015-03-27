
var React = require('react');

module.exports = function(options) {

  var Root = options.Root;

  try {
    React.render(React.createElement(Root, window.INITIAL_PROPS), document);
  } catch(e) {
    console.error('static-react render error');
    console.error(e);
  }

};

