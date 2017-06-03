const path = require('path')
const h = require('react').createElement
const { renderToString } = require('react-dom/server')

module.exports = (Component, opts = {}) => {
  const {
    props,
    id = 'app',
    title,
    stylesheets = [],
    css,
    meta = [],
    scripts = [],
    doctype = true
  } = opts

  const head = [
    (doctype ? '<!DOCTYPE html>' : null),
    (title ? `<title>${title}</title>` : null),
    meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join(''),
    stylesheets.map(href => `<link rel='stylesheet' href='${href}'>`).join(''),
    (css ? `<style>${css}</style>` : null),
  ]
    .filter(n => n !== null)
    .join('')

  const body = renderToString(h(Component, props))

  const suffix = scripts.map(src => `<script src='${src}'></script>`).join('')

  return [
    head,
    `<div id='${id}'>`,
    body,
    `</div>`,
    suffix
  ].join('')
}
