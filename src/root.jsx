
var React = require('react');

var Router = require('react-router-component');

var Pages = Router.Pages;
var Page = Router.Page;

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var Link = Router.Link;

var Head = require('./head.jsx');
var Header = require('./header.jsx');
var View = require('./view.jsx');

// Pages
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');

var Root = React.createClass({

  statics: {
    getRoutes: function() {
      return [
        { name: 'home', path: '/' },
        { name: 'about', path: '/about' },
        // Not found page?
      ];
    },
    renderToString: function(props, url) {
      var html = '<!DOCTYPE html>';
      html += React.renderToString(<Root {...props} path={url} />);
      return html;
    },
  },


  render: function() {
    var browserInitScriptObj = {
      __html:
        "window.INITIAL_PROPS = " + JSON.stringify(this.props) + ";\n"
    };
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Header />
          <Locations path={this.props.path}>
            <Location path="*" handler={View} />
          </Locations>
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src="/js/app.js" />
        </body>
      </html>
    )
  }

});

module.exports = Root;

