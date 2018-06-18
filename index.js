const path = require('path')
const h = require('react').createElement
const { renderToStaticMarkup: render } = require('react-dom/server')

module.exports = async (Component, opts = {}) => {
  const element = h(Component, opts)
  const props = typeof Component.getInitialProps === 'function'
    ? await Component.getInitialProps(element)
    : {}
  const html = render(
    h(Component, Object.assign({}, opts, props))
  )

  return `<!DOCTYPE html>${html}`
}
