import { queryAllProjects } from './api.js'
import { Query } from '../../api/executor.js'

export const fetchAllProjects = () =>
  queryAllProjects({
    // @ts-ignore
    fetcher: globalThis.__VITE_GQL_FETCHER,
    executor: Query,
  })().catch((e) => {
    console.error(e)
    return []
  })

export async function StaticAssetsListPlugin() {
  return {
    name: 'static-assets-list',

    async transform(src: string, id: string, env: { ssr: boolean }) {
      if (id.includes('/ctx/assets/index.svelte.')) {
        const assets = await fetchAllProjects()

        return {
          code: src.replace(
            'DEFAULT_ASSETS = []',
            `DEFAULT_ASSETS = ${JSON.stringify(env.ssr ? assets : assets.slice(0, 20))}`,
          ),
          map: null,
        }
      }
    },
  }
}
