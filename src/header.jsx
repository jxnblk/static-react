
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <h1 className="red">React Static test</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </header>
    )
  }
});
