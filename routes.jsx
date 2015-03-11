
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

//var Root = require('./components/root.jsx');
//var Home = require('./components/Home.jsx');
//var NotFound = require('./components/404.jsx');

module.exports = function(options) { 

  var options = options || {};

  var Root = options.Root;
  var Default = options.Default;
  var baseUrl = options.baseUrl;
  var routes = options.routes;
  var redirects = options.redirects;
  var props = options.props;

  function renderRedirect(redirect, i) {
    return (
      <Redirect {...props}
        key={'redirect-' + i}
        from={redirect.from}
        to={redirect.to} />
    )
  }

  function renderRoute(route, i) {
    if (route.path == '') { return false }
    return (
      <Route {...props}
        key={'route-' + i}
        name={route.name}
        path={route.path}
        handler={route.handler} />
    )
  }

  var allRedirects = [];
  routes.forEach(function(route) {
    if (route.path == '') { return false }
    allRedirects.push({ from: route.path + '/', to: route.name });
  });

  redirects = allRedirects.concat(redirects);

  return (
    <Route name="root"
      path={props.baseUrl}
      handler={Root}>
      {props.routes.map(renderRoute)}
      {redirects.map(renderRedirect)}
      <DefaultRoute {...this.props} name="Default" handler={Default}/>
    </Route>
  )

};


