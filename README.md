# static-react

*Note: this was an early attempt at static site generation with React. I recommend following this approach instead: http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/*

Static site generator using React and React Router

## Usage

### Example config

```js
var path = require('path');
var pkg = require('./package.json');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');

var baseUrl = '/';
var routes = [
  {
    path: '',
    name: 'Home',
    handler: Home,
  },
  {
    path: 'about',
    name: 'About',
    handler: About,
  },
];

module.exports = {
  baseUrl: baseUrl,
  routes: routes,
  redirects: [
  ],
  dest: path.join(__dirname, './'),
  props: {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    baseUrl: baseUrl,
    routes: routes,
    stylesheets: [ '/css/base.css' ],
    scripts: [ '/js/app.js' ],
  },
  Root: require('./components/root.jsx'),
  Default: require('./components/home.jsx'),
};
```

### Example build script

```js
var build = require('static-react/build');
var options = require('./config'); // Custom app config
build(options); // Writes static HTML to destination
```

### Example client app

```js
var React = require('react');
var options = require('./config');
require('static-react/app')(options);
```


### Example Root component

```js
// Example root component

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Html = require('react-html');
var Header = require('./header.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <Html {...this.props}>
        <Header />
        <RouteHandler {...this.props} {...this.state} />
      </Html>
    )
  }

});

module.exports = Root;
```

---

MIT License
