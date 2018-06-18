const test = require('ava')
const h = require('react').createElement
const sr = require('./index')

const Root = props => h('div', null,
  h('h1', null, props.title)
)

test('exports a function', t => {
  t.is(typeof sr, 'function')
})

test('returns a string', t => {
  const html = sr(Root)
  t.is(typeof html, 'string')
})

test('accepts options', t => {
  const html = sr(Root, {
    props: {
      title: 'Hello'
    },
    title: 'Test render',
    css: 'body{font-family:-apple-system,sans-serif}',
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ],
    stylesheets: [
      'base.css'
    ],
    scripts: [
      'bundle.js'
    ]
  })
  console.log(html)
  t.regex(html, /Hello/)
  t.regex(html, /Test render/)
  t.regex(html, /-apple-system/)
  t.regex(html, /viewport/)
  t.regex(html, /base\.css/)
  t.regex(html, /bundle\.js/)
})
