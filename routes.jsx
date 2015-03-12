
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

module.exports = function(options) { 

  var options = options || {};

  var Root = options.Root;
  var Default = options.Default;
  var baseUrl = options.baseUrl;
  var routes = options.routes;
  var props = options.props;

  var redirects = [].concat(options.redirects);
  routes.forEach(function(route) {
    if (route.path == '') { return false }
    redirects.push({ from: route.path+'/', to: route.name });
  });


  function renderRedirect(redirect, i) {
    return (
      <Redirect 
        key={'redirect-' + i}
        from={redirect.from}
        to={redirect.to} />
    )
  }

  function renderRoute(route, i) {
    if (route.path == '') { return false }
    return (
      <Route 
        key={'route-' + i}
        name={route.name}
        path={route.path}
        handler={route.handler} />
    )
  }

  return (
    <Route name="root"
      path={baseUrl}
      handler={Root}>
      {routes.map(renderRoute)}
      {redirects.map(renderRedirect)}
      <DefaultRoute {...this.props} name="Default" handler={Default}/>
    </Route>
  )

};


