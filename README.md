# static-react

Zero-configuration CLI React static renderer

[![Build Status](https://travis-ci.org/jxnblk/static-react.svg)](https://travis-ci.org/jxnblk/static-react)

## Usage

```
npm i -D static-react
```

Static-react include babel presets and React – there is no need to install them separately with npm 3+.

### CLI

```
static-react RootComponent.js > index.html
```

**Options**

- `-p`, `--props` - pass props via a file that exports an object
- `--no-doctype` - omit `<!DOCTYPE html>` from the beginning of the returned string


## Example

See [/example](example)

---

MIT License
