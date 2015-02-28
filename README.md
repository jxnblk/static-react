# Static React

Build script for rendering static HTML files with React.
Intended for use with `react-router-component`.

## Usage

### Example Root component
```jsx
// root.jsx
var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Html {...this.props}>
        <Header />
        <Locations path={this.props.path}>
          <Location path="/" handler={Home} />
          <Location path="/about" handler={About} />
          <NotFound handler={NotFoundPage} />
        </Locations>
        <Footer />
      </Html>
    )
  }
});
```

### Example build script
```js
// build.js

var staticReact = require('static-react');
var Root = require('./src/root.jsx');
var props = {
  title: 'My App',
  routes: [
    { path: '/' },
    { path: '/about' },
  ]
};

staticReact({
  dir: __dirname,
  Root: Root,
  props: props
});
```

### Run build script
```bash
node build
```

## Example client js source
```js
var React = require('react');
var Root = React.createFactory(require('./src/root.jsx'));

React.render(Root(window.INITIAL_PROPS), document);
```

