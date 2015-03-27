
var React = require('react');

var pkg = require('../../package.json');
var Root = require('./components/root.jsx');

module.exports = {
  props: {
    name: pkg.name,
    title: pkg.name,
    description: pkg.description,
    version: pkg.version,
    stylesheets: [
      'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css'
    ],
    scripts: [
      'js/app.js'
    ],
  },
  Root: Root,
};

