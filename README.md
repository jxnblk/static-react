# static-react

Zero-configuration React static site generator

## Usage

### CLI

```
static-react RootComponent.js > index.html
```

**Options**

- `-p`, `--props` - pass props via a file that exports an object
- `--no-doctype` - omit `<!DOCTYPE html>` from the beginning of the returned string

### Node

```js
var render = require('static-react')
var RootComponent = require('./RootComponent')

var html = render(RootComponent)
```

Optionally pass props in as a second argument.

```js
var html = render(RootComponent, { title: 'Hello' })
```

### With ES2015 & JSX

To use this with ES2015 and JSX syntax, install Babel presets and create a `.babelrc` file.

```
npm i -D babel-preset-es2015 babel-preset-react
```

**.babelrc**

```json
{
  "presets": [
    "es2015",
    "react"
  ],
  "ignore": false
}
```

Babel options can also be added to `package.json` instead of a separate `.babelrc` file.

---

MIT License
