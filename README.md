# Static React

Build script for rendering static HTML files with React.
Intended for use with `react-router-component`.

## Usage

```jsx
```

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

## Example client js source
```js
var React = require('react');
var Root = React.createFactory(require('./src/root.jsx'));

React.render(Root(window.INITIAL_PROPS), document);
```

