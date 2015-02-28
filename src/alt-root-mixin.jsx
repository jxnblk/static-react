
var React = require('react');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Head = require('./head.jsx');
var Header = require('./header.jsx');

// Views
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');


module.exports = {

  statics: {
    getRoutes: function() {
      return [
        { path: '/', handler: Home },
        { path: '/about', handler: About },
      ];
    },
    renderToString: function(props) {
      var html = '<!DOCTYPE html>';
      html += React.renderToString(this(props));
      return html;
    },
  },


  render: function() {
    var browserInitScriptObj = {
      __html:
        "window.INITIAL_PROPS = " + JSON.stringify(this.props) + ";\n"
    };
    var script = this.props.script;
    var renderLocation = function(route) {
      return (
        <Location path={route.path} handler={route.handler} />
      )
    };
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Header />
          <Locations path={this.props.path}>
            <Location path="/" handler={Home} />
            <Location path="/about" handler={About} />
            <NotFound handler={NotFoundPage} />
          </Locations>
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={script} />
        </body>
      </html>
    )
  }

};


