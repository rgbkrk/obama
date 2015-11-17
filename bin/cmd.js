#!/usr/bin/env node

var opts = require('../options.js')
require('standard-engine').cli(opts)

process.on('exit', function (status) {
  if (status === 0) {
    console.log(require('fs').readFileSync(__dirname + '/../seal.ans').toString())
  }else{
    console.log('The president cannot endorse this code.')
  }
})
