const test = require('ava')
const {
  Component,
  createElement: h
} = require('react')
const render = require('./index')

const Root = props => h('div', null,
  h('h1', null, props.title)
)

class App extends Component {
  render () {
    return h('h1', null, this.props.hi)
  }
}

App.getInitialProps = async () => {
  return { hi: 'hello' }
}

test('exports a function', t => {
  t.is(typeof render, 'function')
})

test('returns a string', async t => {
  const html = await render(Root)
  t.is(typeof html, 'string')
})

test('accepts options', async t => {
  const html = await render(Root, {
    title: 'Hello',
  })
  t.regex(html, /Hello/)
})

test('getInitialProps', async t => {
  const html = await render(App)
  t.regex(html, /hello/)
})
