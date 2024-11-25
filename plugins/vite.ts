import path from 'path'
import fs from 'fs/promises'

import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput } from '../scripts/svg.js'
import { forFile, __dirname } from '../scripts/utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from '../scripts/asset-logos.js'

export function WebkitSvg() {
  const base = __dirname()
  const isLibPackage = base.includes('node_modules')

  const ICONS_PATH = './src/lib/icons'
  const ILLUS_PATH = './src/lib/illus'

  const staticDir = './static/webkit/'
  const spritesStaticDir = './static/webkit/sprites/'

  return {
    name: 'webkit-svg',

    buildStart() {
      if (isLibPackage) {
        const root = path.resolve(base, '..')

        const copyTargets = ['icons', 'illus', 'sprites']
        copyTargets.forEach((dir) => {
          fs.cp(path.resolve(root, 'dist', dir), staticDir + dir, { recursive: true, force: true })
        })

        return
      }

      forFile([ICONS_PATH + '/**/*.svg'], async (entry) => {
        processSvgWithOutput(entry, staticDir, spritesStaticDir, SPRITES_OPTIONS)
      })

      forFile([ILLUS_PATH + '/**/*.svg'], async (entry) => {
        processSvgWithOutput(entry, staticDir, spritesStaticDir, ILLUS_OPTIONS)
      })
    },

    async handleHotUpdate({ file, server }) {
      const isIcon = file.includes(ICONS_PATH.slice(1))
      const isIllus = file.includes(ILLUS_PATH.slice(1))

      if (isIcon || isIllus) {
        const normalizedPathname = '.' + file.slice(file.indexOf('/src'))

        if (normalizedPathname.startsWith('./src/lib') === false) {
          throw new Error('Incorrect icon path')
        }

        const options = isIcon ? SPRITES_OPTIONS : ILLUS_OPTIONS
        await processSvgWithOutput(normalizedPathname, staticDir, spritesStaticDir, options)

        server.ws.send({
          type: 'full-reload',
          path: '*',
        })
      }
    },
  }
}

export async function StaticAssetLogos() {
  const logos = JSON.stringify(await fetchStatusAssetLogos().catch(() => []))

  return {
    name: 'static-asset-logos',

    transform(src: string, id: string) {
      if (id.includes('AssetLogo.svelte')) {
        return {
          code: replaceAssetLogosSource(src, logos),
          map: null,
        }
      }
    },
  }
}
