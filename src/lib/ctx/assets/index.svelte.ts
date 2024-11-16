import { onMount } from 'svelte'
import { createCtx, type TNominal } from '$lib/utils/index.js'
import { ApiQuery } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'

export type TAssetSlug = TNominal<string, 'TAssetSlug'>
export type TAsset = { slug: TAssetSlug; name: string; ticker: string; rank?: null | number }

export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      logoUrl
      rank`

export const queryAllProjects = ApiQuery(
  () => `{
    allProjects{ ${PROJECT_FRAGMENT} }
  }`,
  (gql: { allProjects: TAsset[] }) =>
    gql.allProjects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999)),
  {
    cacheTime: undefined,
  },
)

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
