
var React = require('react');

var Router = require('react-router-component');

var MyRouterMixin = {
  mixins: [Router.RouterMixin, Router.AsyncRouteRenderingMixin],

  statics: {
    renderToString: function(props) {
      var html = '<!DOCTYPE html>';
      //html += React.renderToString(this(props));
      return html;
    },
  },

  getRoutes: function(props) {
    var routes = [];
    this.routes.map(function(route) {
      routes.push({ path: route.path, handler: route.handler });
    });
    //for (var path in this.routes)
    //  routes.push({path: path, handler: this.routes[path]})
    return routes
  },

  browserInitScriptObj: {
    __html: "window.INITIAL_PROPS = " + JSON.stringify(this.props) + ";\n"
  },

  renderLayout: function() {
    var script = this.props.script;
    return (
      <html>
        <Head {...this.props} />
        <body>
          root-mixin
          {/*this.transferPropsTo(this.renderRouteHandler())*/}
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={script} />
        </body>
      </html>
    )
  }

}
