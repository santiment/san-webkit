import type { TAsset, TAssetSlug } from '$lib/ctx/assets/api.js'
import type { TAssetTarget } from './asset-form-step/schema.js'

export const getAssetTargetTitle = ({ slugs, namesMap }: TAssetTarget) =>
  slugs.map((slug) => namesMap.get(slug) ?? '').join(', ')

export function mapSlugNames(
  slugs: TAssetSlug[],
  assetGetter: (slug: string) => TAsset | undefined,
) {
  const map = new Map<TAssetSlug, string>()

  for (const slug of slugs) {
    const { name } = assetGetter(slug) ?? {}
    if (name) {
      map.set(slug, name)
    }
  }

  return map
}
