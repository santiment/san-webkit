import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'
import { Query } from '$lib/api/executor.js'

import {
  queryAllProjects,
  queryDeFiProjects,
  queryErc20Projects,
  queryStablecoinProjects,
  type TAsset,
  type TAssetSlug,
} from './api.js'

export type TAssetCategory = keyof ReturnType<(typeof useAssetsCtx)['get']>['assets']

export const useAssetsCtx = createCtx('webkit_useAssetsCtx', () => {
  let assets = $state.raw<TAsset[]>([])
  let erc20Assets = $state.raw<TAsset[]>([])
  let stablecoinAssets = $state.raw<TAsset[]>([])
  let defiAssets = $state.raw<TAsset[]>([])

  const assetBySlugMap = $derived(new Map(assets.map((item) => [item.slug, item])))

  onMount(() => {
    queryAllProjects(Query)().then((items) => (assets = items))
    queryErc20Projects(Query)().then((items) => (erc20Assets = items))
    queryStablecoinProjects(Query)().then((items) => (stablecoinAssets = items))
    queryDeFiProjects(Query)().then((items) => (defiAssets = items))
  })

  return {
    assets: {
      all: {
        get $() {
          return assets
        },
      },
      erc20: {
        get $() {
          return erc20Assets
        },
      },
      stablecoins: {
        get $() {
          return stablecoinAssets
        },
      },
      defi: {
        get $() {
          return defiAssets
        },
      },
    },

    getAssetBySlug(slug: string): undefined | TAsset {
      return assetBySlugMap.get(slug as TAssetSlug)
    },
  }
})
