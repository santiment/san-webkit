import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput } from './svg.js'
import { forFile } from './utils.js'

const ICONS_PATH = './src/lib/icons'
const ILLUS_PATH = './src/lib/illus'

const staticDir = './static/webkit/'
const spritesStaticDir = './static/webkit/sprites/'

await Promise.all([
  forFile([ICONS_PATH + '/**/*.svg'], (entry) => {
    return processSvgWithOutput(entry, staticDir, spritesStaticDir, SPRITES_OPTIONS)
  }),
  forFile([ILLUS_PATH + '/**/*.svg'], (entry) => {
    return processSvgWithOutput(entry, staticDir, spritesStaticDir, ILLUS_OPTIONS)
  }),
])
