
import path from 'path'
import { spawn } from 'child_process'
import assert from 'assert'
import isHtml from 'is-html'
import cheerio from 'cheerio'

describe('static-react', () => {
  const cli = path.join(__dirname, '..', 'bin', 'static-react.js')

  it('should return a string', (done) => {
    const process = spawn(cli, ['test/Root.js'])

    process.stdout.on('data', data => {
      const html = data.toString('utf8')
      assert.equal(typeof html, 'string')
      done()
    })
  })

  it('should return html', (done) => {
    const process = spawn(cli, ['test/Root.js'])

    process.stdout.on('data', data => {
      const html = data.toString('utf8')
      assert.equal(isHtml(html), true)
      done()
    })
  })

  it('should render props', (done) => {
    const process = spawn(cli, [
      'test/Root.js',
      '-p',
      'test/fixture-props.js'
    ])

    process.stdout.on('data', data => {
      const html = data.toString('utf8')
      const $ = cheerio.load(html)
      const title = $('#title').text()
      assert.equal(title, 'Test')
      done()
    })
  })

})

