#!/usr/bin/env node
require('babel-register')()
const fs = require('fs')
const path = require('path')
const meow = require('meow')
const render = require('../index')

const cli = meow(`
  Usage
    $ static-react Component.js > index.html

  Options

    -p, --props     Component props
    --title         Page title
    --id            Element id attribute for the wrapping div
    --meta          List of meta tags to include
    --css           CSS string to include in the head
    --stylesheets   List of stylesheets to link
    ---scripts      List of JavaScript files to include
    --no-doctype    Omit \`<!DOCTYPE html>\` from the beginning
    -o, --out       File to write to, otherwise uses stdout

`, {
  alias: {
    p: 'props',
    o: 'out'
  }
})

const [ filepath ] = cli.input
const dir = process.cwd()

const file = path.join(dir, filepath)
const mod = require(file)
const Component = mod.default || mod

const pkgpath = path.join(dir, 'package.json')
const pkg = require(pkgpath) || {}

const opts = Object.assign({}, pkg['static-react'], cli.flags)

const html = render(Component, opts)

if (opts.out) {
  const filename = path.join(dir, opts.out)
  fs.writeFileSync(filename, html)
  console.log('File written to "' + opts.out + '"')
} else {
  process.stdout.write(html)
}
