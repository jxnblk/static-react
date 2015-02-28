
var React = require('react');
var Root = React.createFactory(require('./src/root.jsx'));

React.render(Root(window.INITIAL_PROPS), document);

