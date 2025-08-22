import type { Plugin } from 'vite'
import type { TServerManifest } from './types.js'

import fs from 'node:fs'
import path from 'node:path'

import fg from 'fast-glob'

const SERVER_MANIFEST = path.resolve('.', 'build/server/manifest.js')
const SERVER_CHUNKS_PATH = 'build/server/chunks'

export function BulletshellPlugin({ enabled = false }): Plugin {
  const virtualModuleId = 'virtual:bulletshell'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  const detectedBulletshellRoutes = new Set<string>()

  if (enabled) {
    console.log({ SERVER_MANIFEST })
  }

  return {
    name: 'bulletshell-plugin', // required, will show up in warnings and errors

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const BULLETSHELL_MANIFEST = {}`
      }
    },

    transform(code, id) {
      if (id.includes('@sveltejs/kit/src/runtime/server/page/render.js')) {
        return {
          code: code.replace(
            `else if (state.prerendering) {
					head += `,
            `else if (state.prerendering || process.env.BULLETSHELL) {
					head += `,
          ),
        }
      }

      if (id.includes('+page.server') && code.includes('_bulletshell')) {
        const sveltekitRouteId =
          id.slice(id.indexOf('routes/') + 6, id.lastIndexOf('/+page')) || '/'
        detectedBulletshellRoutes.add(sveltekitRouteId)
      }

      return null
    },

    closeBundle() {
      if (!enabled) return

      console.log({ SERVER_MANIFEST })
      fg(['build/server/']).then(console.log)

      if (this.environment.name !== 'ssr') return

      return import(SERVER_MANIFEST).then(async ({ manifest }: { manifest: TServerManifest }) => {
        const routes = manifest._.routes.filter((route) => detectedBulletshellRoutes.has(route.id))
        const leafToRoute = new Map(routes.map((route) => [route.page.leaf, route]))

        const bulletshell_routes = await fg([
          `${SERVER_CHUNKS_PATH}/(${Array.from(leafToRoute.keys()).join('|')})-*.js`,
        ])
          .then((entries) => entries.map((entry) => entry.replace(SERVER_CHUNKS_PATH, '.')))
          .then((entries) =>
            entries.map((entry) => {
              const leaf = parseInt(entry.slice(2), 10)
              const route = leafToRoute.get(leaf)

              if (!route) {
                throw new Error('Failed to match file to a route leaf')
              }

              return { id: route.id, chunkFilepath: entry }
            }),
          )

        return fg([`${SERVER_CHUNKS_PATH}/hooks.server-*.js`]).then(([entry]) => {
          const hooksFileSource = fs.readFileSync(entry).toString()
          const hooksFile = hooksFileSource.replace(
            /const BULLETSHELL_MANIFEST = .+;/,
            `const BULLETSHELL_MANIFEST = {${bulletshell_routes
              .map((item) => {
                return `${JSON.stringify(item.id)}:{
  route_id: ${JSON.stringify(item.id)},
  bulletshells: {},
  config: await import(${JSON.stringify(item.chunkFilepath)}).then(({server}) => server._bulletshell),
}`
              })
              .join(',')}, __fs_locks: new Set()};`,
          )

          fs.writeFileSync(entry, hooksFile)
        })
      })
    },
  }
}
