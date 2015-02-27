
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.name}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="stylesheet" href={this.props.stylesheet} />
      </head>
    )
  }
});
