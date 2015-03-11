// Example custom build script

var React = require('react');
var staticReact = require('..');
var pkg = require('../package.json');

var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');

var options = {
  baseUrl: '/examples/',
  routes: [
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
  ],
  redirects: [
  ],
  dest: './examples/',
  props: {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
  },
  Root: require('./components/root.jsx'),
  Default: require('./components/home.jsx'),
};

staticReact(options);

