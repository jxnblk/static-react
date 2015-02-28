
var React = require('react');

var Router = require('react-router-component');

var Root = React.createFactory(require('./src/root.jsx'));
var View = React.createFactory(require('./src/view.jsx'));
var data = require('./data');

React.render(Root(window.INITIAL_PROPS), document);
//React.render(Root(data), document);

