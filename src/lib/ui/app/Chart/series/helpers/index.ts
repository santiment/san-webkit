import type { TAsset } from '$lib/ctx/assets/api.js'
import type { TSeries } from '../../ctx/series.svelte.js'

export function getAssetSelectorLabel(
  getAssetBySlug: (slug: undefined | null | string) => undefined | TAsset,
  metric: Extract<TSeries, { selector: any }>,
): string | undefined {
  const asset = getAssetBySlug(metric.selector.$?.slug)

  return asset ? formatAssetTicker(asset) : undefined
}

export function formatAssetTicker(asset: Pick<TAsset, 'ticker' | 'chain'>) {
  return asset.ticker + (asset.chain ? `.${asset.chain.ticker.toLowerCase()}` : '')
}
