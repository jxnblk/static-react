
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {

    var renderLink = function(route, i) {
      return <Link to={'/'+route.path} key={'header-link-'+route.name} className="button button-transparent">{route.name}</Link>
    };

    return (
      <header>
        <h1 className="h3 blue">{this.props.name}</h1>
        {this.props.routes.map(renderLink)}
      </header>
    )

  }

});
