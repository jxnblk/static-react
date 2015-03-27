# static-react

Static site generator using React and React Router

## Usage

### Example config

```js
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

### Example build script

```js
var fs = require('fs');
var build = require('static-react/build');
var options = require('./config'); // Custom app config
var html = build(options); // Returns static HTML
fs.writeFileSync('./index.html', html); // Write file to disk
```

### Example client app

```js
var React = require('react');
var options = require('./config');
require('static-react/client')(options);
```


### Example Root component

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

---

MIT License
