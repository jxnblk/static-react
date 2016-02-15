# static-react

Zero-configuration CLI React static renderer

[![Build Status](https://travis-ci.org/jxnblk/static-react.svg)](https://travis-ci.org/jxnblk/static-react)

## Usage

### CLI

```
static-react RootComponent.js > index.html
```

**Options**

- `-p`, `--props` - pass props via a file that exports an object
- `--no-doctype` - omit `<!DOCTYPE html>` from the beginning of the returned string

### With ES2015 & JSX

To use this with ES2015 and JSX syntax, install Babel presets and create a `.babelrc` file or add a Babel configuration object to `package.json`.

```
npm i -D babel-preset-es2015 babel-preset-react
```

**.babelrc**

```json
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

### Example

See [/example](example)

---

MIT License
