import type { TBasicItem } from './types.js'

export const getItemTitle = (item: TBasicItem) => (typeof item === 'string' ? item : item.title)
