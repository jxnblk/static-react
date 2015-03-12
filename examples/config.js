
var React = require('react');

var pkg = require('../package.json');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');

module.exports = {
  baseUrl: '/',
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
    stylesheets: [
      'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css'
    ],
    scripts: [
      '/js/app.js'
    ],
  },
  Root: require('./components/root.jsx'),
  Default: require('./components/home.jsx'),
};

