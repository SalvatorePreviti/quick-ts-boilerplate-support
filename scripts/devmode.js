if (!process.env.NODE_ENV)
  process.env.NODE_ENV = 'development'

const appRootPath = require('app-root-path')

try {
  process.chdir(appRootPath.path)
} catch (ex) {
  // Ignore exception
}

require('ts-node')
  .register({
    typeCheck: true,
    compilerOptions: {
      outDir: 'src'
    }
  })

require('pretty-error')
  .start()
  .skipPackage('ts-node')
  .appendStyle({
    'pretty-error > trace > item': {
      marginBottom: '0'
    }
  })
  .alias(appRootPath, '.')
  .alias(`${appRootPath}/node_modules`, './node_modules')

const chain = require('stack-chain')
const sep = require('path').sep

const internalPath = `internal${sep}`
chain.filter.attach((error, frames) => {
  return frames.filter((callSite, index) => {
    const name = callSite && callSite.getFileName()
    return typeof name === 'string' && (index === 0 || (!name.startsWith(internalPath) && name.includes(sep)))
  })
})

require('trace')

