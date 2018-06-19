
# static-react

Zero-configuration CLI React static renderer

[![Build Status](https://travis-ci.org/jxnblk/static-react.svg)](https://travis-ci.org/jxnblk/static-react)

## Usage

```
npm i -g static-react
```

```
static-react RootComponent.js > index.html
```

Static-react include babel presets and React – there is no need to install them separately

## Examples

See the [examples/](examples) directory

## Fetching Data

Use the `getInitialProps` static method to fetch data or get server-side props for things like CSS-in-JS libraries.

```jsx
import React from 'react'
import fetch from 'isomorphic-fetch'

export default class extends React.Component {
  static getInitialProps = async () => {
    const data = await fetch('https://api.example.com/data')

    return {
      data
    }
  }

  render () {
    const { data } = this.props

    return (
      <html>
        <h1>Data</h1>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </html>
    )
  }
}
```

## CSS-in-JS

Use the `getInitialProps` to pass side effects from CSS-in-JS libraries as props.

```jsx
import React from 'react'
import { Box } from 'rebass'

export default class Root extends React.Component {
  static getInitialProps = async (app) => {
    const { ServerStyleSheet } = require('styled-components')
    const { renderToString } = require('react-dom/server')
    const sheet = new ServerStyleSheet()
    renderToString(
      sheet.collectStyles(app)
    )
    const css = sheet.getStyleTags()
    return { css }
  }

  static defaultProps = {
    css: ''
  }

  render () {
    const { css } = this.props

    return (
      <html>
        <head>
          ${css}
        </head>
        <body>
          <Box px={3} py={4}>
            Beep boop
          </Box>
        </body>
      </html>
    )
  }
}
```

---

MIT License
