// Example root component

var React = require('react');
var Html = require('react-html');
var Header = require('./header.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <Html {...this.props}>
        <div className="p2">
          <Header {...this.props} />
          <p>Cool little static-react site.</p>
        </div>
      </Html>
    )
  }

});

module.exports = Root;

