import path from 'path'
import fs from 'fs/promises'

import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput } from '../scripts/svg.js'
import { forFile, __dirname } from '../scripts/utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from '../scripts/asset-logos.js'
import {
  fetchMetricsRestrictions,
  replaceDefaultMetricsRestrictionsSource,
} from '../scripts/metrics-restrictions/index.js'

export function WebkitSvg() {
  const base = __dirname()
  const isLibPackage = base.includes('node_modules')

  const ICONS_PATH = './dist/icons'
  const ILLUS_PATH = './dist/illus'

  const staticDir = './static/webkit/'
  const spritesStaticDir = './static/webkit/sprites/'

  return {
    name: 'webkit-svg',

    async buildStart() {
      if (isLibPackage) {
        const root = path.resolve(base, '..')
        const copyTargets = ['icons', 'illus', 'sprites']

        await Promise.all(
          copyTargets.map((dir) => {
            const sourcePath = path.resolve(root, 'dist', dir)
            const destPath = staticDir + dir

            return fs.cp(sourcePath, destPath, { recursive: true, force: true })
          }),
        )

        return
      }

      await Promise.all([
        forFile([ICONS_PATH + '/**/*.svg'], (entry) => {
          return processSvgWithOutput(entry, staticDir, spritesStaticDir, SPRITES_OPTIONS)
        }),
        forFile([ILLUS_PATH + '/**/*.svg'], (entry) => {
          return processSvgWithOutput(entry, staticDir, spritesStaticDir, ILLUS_OPTIONS)
        }),
      ])
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

export async function StaticMetricsRestrictions() {
  const data = JSON.stringify(await fetchMetricsRestrictions().catch(() => ({})))

  return {
    name: 'static-metrics-restrictions',

    transform(src: string, id: string) {
      if (id.includes('metrics-registry/restrictions/api')) {
        return {
          code: replaceDefaultMetricsRestrictionsSource(src, data),
          map: null,
        }
      }
    },
  }
}

export function ReportMissingPreloadScriptsPlugin() {
  return {
    name: 'report-missing-preload-scripts',

    transform(src: string, id: string) {
      if (id.includes('preload-helper')) {
        return {
          code: src.replace(
            'if (isCss) {',
            `if (!isCss) {
 link.addEventListener("error", () => handlePreloadError({href: link.href}))
}
if (isCss) {`,
          ),
          map: null,
        }
      }
    },
  }
}
