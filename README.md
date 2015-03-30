# static-react

Static site generator using React

```bash
npm install static-react
```

## Usage

### Create a config file

```js
// Example config.js
var pkg = require('./package.json');
var Root = require('./components/root.jsx');

module.exports = {
  props: {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    stylesheets: [ '/css/base.css' ],
    scripts: [ '/js/app.js' ],
  },
  Root: Root
};
```

### Create a build script

```js
// Example build.js
var fs = require('fs');
var build = require('static-react/build');
var options = require('./config'); // Custom app config
var html = build(options); // Returns static HTML
fs.writeFileSync('./index.html', html); // Write file to disk
```

### Create a client-side entry.js

Use Browserify, Webpack, or a similar tool to create the client side bundle.

```js
// Example entry.js
var React = require('react');
var options = require('./config');
require('static-react/client')(options);
```


### Create a Root component

```js
// Example root component

var React = require('react');
var Html = require('react-html');
var Header = require('./header.jsx');

var Root = React.createClass({
  render: function() {
    return (
      <Html {...this.props}>
        <Header />
        <p>Cool little static-react site.</p>
      </Html>
    )
  }
});

module.exports = Root;
```

## CLI

Pass paths to the root component and destination directory.

```bash
static-react src/Root.jsx demo
```

Options can be set in `package.json`.

```json
"static-react": {
  "props": {
  }
}
```

---

MIT License
