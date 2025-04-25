import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'
import { Query } from '$lib/api/executor.js'

import { queryAllProjects, type TAsset, type TAssetSlug } from './api.js'

export const useAssetsCtx = createCtx('webkit_useAssetsCtx', () => {
  let assets = $state.raw<TAsset[]>([])

  const assetBySlugMap = $derived(new Map(assets.map((item) => [item.slug, item])))

  onMount(() => {
    queryAllProjects(Query)().then((items) => (assets = items))
  })

  return {
    assets: {
      get $() {
        return assets
      },
    },

    getAssetBySlug(slug: string): undefined | TAsset {
      return assetBySlugMap.get(slug as TAssetSlug)
    },
  }
})
