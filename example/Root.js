import React from 'react'
import {
  Box
} from 'rebass'

export default class Root extends React.Component {
  static getInitialProps = async (el) => {
    const { ServerStyleSheet } = require('styled-components')
    const { renderToString } = require('react-dom/server')
    const sheet = new ServerStyleSheet()
    renderToString(
      sheet.collectStyles(el)
    )
    const css = sheet.getStyleTags()
    return { css }
  }

  static defaultProps = {
    title: 'static-react',
    css: ''
  }

  render () {
    const {
      title,
      css
    } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          ${css}
        </head>
        <body>
          <Box px={3} py={4}>
            <header>
              <h1>{title}</h1>
            </header>
            <main className='py4'>
              <img src='http://lorempixel.com/256/256/cats/'
                alt='Kitten' />
            </main>
            <footer className='py3'>
              <p>© 2018 Brent Jackson</p>
            </footer>
          </Box>
        </body>
      </html>
    )
  }
}
