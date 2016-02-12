
import assert from 'assert'
import isHtml from 'is-html'
import cheerio from 'cheerio'
import render from '..'
import Root from './Root'

describe('render', () => {

  let html

  it('should be a function', () => {
    assert.equal(typeof render, 'function')
  })

  it('should return html', () => {
    html = render(Root)
    assert.equal(isHtml(html), true)
  })

  it('should render props', () => {
    html = render(Root, { title: 'Test' })
    const $ = cheerio.load(html)
    const title = $('#title').text()
    assert.equal(title, 'Test')
  })

})

