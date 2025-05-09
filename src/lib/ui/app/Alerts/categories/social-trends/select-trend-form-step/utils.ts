import type { TSocialTrendsApiAlertTarget } from '../schema.js'
import type { TTrendState } from './schema.js'

export function getInitTrendTarget(type: TTrendState['target']['type']): TTrendState['target'] {
  switch (type) {
    case 'asset':
      return { type, slugs: [], namesMap: new Map() }
    case 'word':
      return { type, words: [] }
    case 'watchlist':
      return { type, id: null, title: '' }
  }
}

export function parseApiTarget(apiTarget: TSocialTrendsApiAlertTarget): TTrendState['target'] {
  if ('slug' in apiTarget) {
    return { type: 'asset', slugs: apiTarget.slug, namesMap: new Map() }
  }

  if ('word' in apiTarget) {
    return { type: 'word', words: apiTarget.word }
  }

  return { type: 'watchlist', id: apiTarget.watchlist_id, title: '' }
}

export function getApiTarget(target: TTrendState['target']): TSocialTrendsApiAlertTarget {
  switch (target.type) {
    case 'asset':
      return { slug: target.slugs }
    case 'word':
      return { word: target.words }
    case 'watchlist':
      return { watchlist_id: target.id }
  }
}
