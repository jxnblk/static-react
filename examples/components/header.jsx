
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <h1 className="h3 blue">Static React Example</h1>
        <Link to="/">Home</Link>
        <Link to="About">About</Link>
      </header>
    )
  }
});
