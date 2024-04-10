import path from 'path'
import fs from 'fs'
import { forFile, mkdir } from './utils.js'

const LIB = path.resolve('node_modules/san-webkit/lib')
const webkitMap = (dir) => path.resolve(LIB, dir) + '/**/*.svg'

export function copyWebkitAssets(STATIC = path.resolve('static/webkit')) {
  function copy(file) {
    const filePath = file.replace(LIB, '')
    const outPath = STATIC + filePath
    const fileName = path.basename(filePath)

    mkdir(outPath.replace(fileName, ''))

    fs.copyFileSync(file, outPath)
  }

  forFile(['icons', 'illus', 'sprites'].map(webkitMap), copy)

  forFile([path.resolve(LIB, '**/*.jpg')], copy)

  forFile([path.resolve(LIB, 'static/**/*.*')], copy)

  forFile([path.resolve(LIB, 'styles/**/*.*'), path.resolve(LIB, 'fonts/*.*')], copy)

  console.log('⚙ san-webkit is ready to use')
}
