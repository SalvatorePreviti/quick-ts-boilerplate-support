#!/usr/bin/env node

/* eslint no-console: 0 */
/* eslint import/no-dynamic-require: 0 */

const path = require('path')
const appRootPath = require('app-root-path')
require('./scripts/devmode')

console.time('completed')

require(path.join(appRootPath.path, 'src/index'))

console.log('')
console.timeEnd('completed')
