
var React = require('react');

var pkg = require('../../package.json');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');
var Docs = require('./components/docs.jsx');
var Root = require('./components/root.jsx');
var Default = require('./components/home.jsx');

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
  {
    path: 'docs',
    name: 'Docs',
    handler: Docs,
  },
];

module.exports = {
  baseUrl: '/',
  routes: routes,
  redirects: [ ],
  dest: './examples/',
  props: {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    routes: routes,
    stylesheets: [
      'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css'
    ],
    scripts: [
      '/js/app.js'
    ],
  },
  Root: Root,
  Default: Default,
};

