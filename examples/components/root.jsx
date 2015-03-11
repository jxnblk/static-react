// Example root component

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Html = require('react-html');
var Header = require('./header.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <Html {...this.props}>
        <Header />
        <RouteHandler {...this.props} {...this.state} />
      </Html>
    )
  }

});

module.exports = Root;

