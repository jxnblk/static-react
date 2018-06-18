#!/usr/bin/env node
require('babel-register')({
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-runtime'
  ].map(require.resolve)
})
const fs = require('fs')
const path = require('path')
const meow = require('meow')
const render = require('./index')
const config = require('pkg-conf').sync('static-react')

const cli = meow(`
  Usage
    $ static-react Component.js > index.html
`, {
  flags: {}
})

const [ input ] = cli.input
const opts = Object.assign({}, config, cli.flags)
const file = path.resolve(input)
const mod = require(file)
const Component = mod.default || mod

render(Component, opts)
  .then(html => {
    console.log(html)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

// process.stdout.write(html)

require('update-notifier')({
  pkg: require('./package.json')
}).notify()
