
var React = require('react');

//var Router = require('react-router');
//var DefaultRoute = Router.DefaultRoute;
//var Link = Router.Link;
//var Route = Router.Route;
//var RouteHandler = Router.RouteHandler;

var Head = require('./head.jsx');

var Root = React.createClass({

  statics: {

    getRoutes: function() {
      return [
        '/',
      ];
    },

    renderToString: function(props) {
      return '<!DOCTYPE html>' +
        React.renderToString(<Root {...props} />);
    },

  },


  render: function() {
    return (
      <html>
        <Head {...this.props} />
        <body>
          <h1 className="red">React Static test</h1>
          {/*<Link to="home">Dashboard</Link> */}
          <script src="js/app.js" />
        </body>
      </html>
    )
  }

});

//var routes = (
//  <Route name="app" path="/" handler={App}>
//    <Route name="inbox" handler={Inbox}/>
//    <Route name="calendar" handler={Calendar}/>
//    <DefaultRoute handler={Dashboard}/>
//  </Route>
//);

//Router.run(routes, function (Handler) {
//    React.render(<Handler/>, document.body);
//});

module.exports = Root;

