import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput } from './svg.js'
import { forFile } from '../scripts/utils.js'
import { fetchStatusAssetLogos } from '../scripts/asset-logos.js'

export function WebkitSvg() {
  const ICONS_PATH = './src/lib/icons'
  const ILLUS_PATH = './src/lib/illus'

  const staticDir = './static/webkit/'
  const spritesStaticDir = './static/webkit/sprites/'

  return {
    name: 'webkit-svg',

    buildStart() {
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
        const options = isIcon ? SPRITES_OPTIONS : ILLUS_OPTIONS
        await processSvgWithOutput(file, staticDir, spritesStaticDir, options)

        server.ws.send({
          type: 'full-reload',
          path: '*',
        })
      }
    },
  }
}

export async function StaticAssetLogos() {
  const logos = JSON.stringify(await fetchStatusAssetLogos())

  return {
    name: 'static-asset-logos',

    transform(src: string, id: string) {
      if (id.includes('AssetLogo.svelte')) {
        return {
          code: src.replace('STATIC_ASSET_LOGO = {}', `STATIC_ASSET_LOGO = ${logos}`),
          map: null,
        }
      }
    },
  }
}
