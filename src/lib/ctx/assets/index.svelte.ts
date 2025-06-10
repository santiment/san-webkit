import { onMount } from 'svelte'
import { BROWSER } from 'esm-env'

import { createCtx } from '$lib/utils/index.js'
import { Query } from '$lib/api/executor.js'

import { queryAllProjects, type TAsset, type TAssetSlug } from './api.js'

// TODO: Replace with build time vite plugin
const DEFAULT_ASSETS: TAsset[] = BROWSER ? [] : await queryAllProjects(Query)().catch(() => [])

export const useAssetsCtx = createCtx('webkit_useAssetsCtx', () => {
  let assets = $state.raw<TAsset[]>(DEFAULT_ASSETS)

  const assetBySlugMap = $derived(
    new Map(assets.map((item) => [item.slug.toLowerCase() as string, item])),
  )
  const assetByTickerMap = $derived(createAssetTickerMap(assets))

  onMount(() => {
    queryAllProjects(Query)().then((items) => (assets = items))
  })

  return {
    assets: {
      get $() {
        return assets
      },
    },

    getAssetBySlug(slug: undefined | null | string): undefined | TAsset {
      return slug ? assetBySlugMap.get(slug.toLowerCase() as TAssetSlug) : undefined
    },

    /**
     * Returns first matched ticker with highest rank
     */
    getAssetByTicker(ticker: undefined | null | string): undefined | TAsset {
      return ticker ? assetByTickerMap.get(ticker.toLowerCase()) : undefined
    },
  }
})

function createAssetTickerMap(assets: TAsset[]) {
  const map = new Map<string, undefined | TAsset>()

  for (const asset of assets) {
    const ticker = asset.ticker?.toLowerCase()

    if (map.has(ticker)) continue

    map.set(ticker, asset)
  }

  return map
}
