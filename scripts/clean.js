const fs = require('fs')
const path = require('path')
const { ROOT } = require('./utils')

fs.rmSync(path.resolve(ROOT, 'lib'), { recursive: true, force: true })
