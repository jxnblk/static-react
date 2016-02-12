
var React = require('react')
var ReactDOMServer = require('react-dom/server')

var render = function (Component, props) {
  var html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Component, props)
  )
  return html
}

module.exports = render

