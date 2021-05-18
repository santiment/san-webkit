const fs = require('fs')
const path = require('path')
const { SRC, LIB, mkdir, forFile } = require('./utils')
const { prepareSvelte } = require('./svelte')
const { prepareIcons } = require('./icons')

async function main() {
  await forFile(['src/**', '!src/**/*.ts'], (entry) => {
    const filePath = entry.replace('src/', '')
    const libFilePath = path.resolve(LIB, filePath)
    const srcFilePath = path.resolve(SRC, filePath)

    mkdir(path.dirname(libFilePath))

    const file = fs.readFileSync(srcFilePath)
    fs.writeFileSync(libFilePath, file)
  })

  prepareSvelte()
  prepareIcons()
}
main()
