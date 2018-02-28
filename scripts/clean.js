/* eslint no-console:0 */

const appRootPath = require('app-root-path')
const del = require('del')

del(['build', 'tmp', '.tmp'], {
  cwd: appRootPath.path
})
  .then(paths => {
    if (paths.length === 0)
      console.log('Nothing was deleted\n')
    else
      console.log('Deleted:\n', paths.join('\n'), '\n')
  })
  .catch((e) => {
    console.error('Failed to clean', e)
  })
