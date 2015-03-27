
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <header>
        <h1 className="h3 blue">{this.props.name}</h1>
      </header>
    )
  }

});
