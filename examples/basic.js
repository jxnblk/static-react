import React from 'react'

export default class Root extends React.Component {
  static defaultProps = {
    title: 'static-react',
  }

  render () {
    const { title } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <h1>{title}</h1>
        </body>
      </html>
    )
  }
}
