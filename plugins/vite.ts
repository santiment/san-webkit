import path from 'path'
import fs from 'fs/promises'

import {
  ILLUS_OPTIONS,
  SPRITES_OPTIONS,
  getSvgIds,
  processSvgWithOutput,
  replaceAvailableSvgs,
} from '../scripts/svg.js'
import { forFile, __dirname } from '../scripts/utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from '../scripts/asset-logos.js'
import {
  fetchMetricsRestrictions,
  replaceDefaultMetricsRestrictionsSource,
} from '../scripts/metrics-restrictions/index.js'

export async function WebkitSvg() {
  const base = __dirname()
  const isLibPackage = base.includes('node_modules')

  const ICONS_PATH = './src/lib/icons'
  const ILLUS_PATH = './src/lib/illus'

  const staticDir = './static/webkit/'
  const spritesStaticDir = './static/webkit/sprites/'

  const svgIds = await getSvgIds()

  return {
    name: 'webkit-svg',

    transform(src: string, id: string) {
      if (id.includes('/core/Svg/ids.ts')) {
        return {
          code: replaceAvailableSvgs(src, svgIds),
          map: null,
        }
      }
    },

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

// TODO: Support server side page context
export async function AstroSvelteCtxPlugin(svelteCtxPath: string) {
  return {
    name: 'astro-svelte-ctx',
    enforce: 'pre',

    transform(src: string, id: string) {
      if (id.includes(svelteCtxPath)) {
        const code =
          src.replace(
            /(import .*\n)+/g,
            `import { component_root, pop, push } from 'svelte';
            $&
            push({}, true, () => {});
            component_root(() => {
                     `,
          ) + '});'

        return { code, map: null }
      }

      if (
        id.includes('transitions/router.js') || // Used in build mode
        id.includes('@astrojs_svelte_client') // Used in dev mode
        // id.includes('@astrojs/svelte/dist/client.svelte.js')
        // id.includes('transitions-router.js')
      ) {
        return {
          code: `import "${svelteCtxPath}" \n` + src,
          map: null,
        }
      }

      const isSvelteClientImport = id.includes('svelte/src/index-client')
      const isSvelteIndexImport = isSvelteClientImport || id.includes('svelte/src/index-server')

      if (isSvelteIndexImport) {
        const effect_export = isSvelteClientImport
          ? "{ component_root } from './internal/client/reactivity/effects.js'"
          : 'const component_root = null'
        const code = src.replace(
          /(export {\s*createContext)/g,
          `
  export ${effect_export};
  $1, pop,push`,
        )

        return { code, map: null }
      }
    },
  }
}
