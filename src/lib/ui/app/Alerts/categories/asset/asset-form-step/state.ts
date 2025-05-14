import type { TAssetSlug } from '$lib/ctx/assets/api.js'

export type TAssetState = {
  target: {
    slugs: TAssetSlug[]
    namesMap: Map<TAssetSlug, string>
  }
}

export function stateIsAsset(state: unknown): state is TAssetState {
  if (typeof state !== 'object' || !state) return false
  if (!('target' in state)) return false

  const { target } = state

  if (typeof target !== 'object' || !target) return false
  if (!('slugs' in target)) return false

  const { slugs } = target
  if (!Array.isArray(slugs)) return false

  if (slugs.length && typeof slugs[0] === 'string') {
    return true
  }

  return false
}
