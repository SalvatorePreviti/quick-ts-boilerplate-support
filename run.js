#!/usr/bin/env node

/* eslint no-console: 0 */
/* eslint import/no-dynamic-require: 0 */

const path = require('path')
const appRootPath = require('app-root-path')
require('./scripts/devmode')

console.time('completed')

const script = process.argv[2]
if (!script) {
  console.error('Error: you need to specify the script to run')
  process.exit(-1)
}

process.argv.splice(2, 1)

require(path.join(appRootPath.path, script))

console.log('')
console.timeEnd('completed')
