
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const render = (Component, props) => {
  var html = ReactDOMServer.renderToStaticMarkup(<Component {...props} />)
  return html
}

export default render

