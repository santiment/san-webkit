import type { TApiAlert } from '../../types.js'
import type { TAssetSlug } from '$lib/ctx/assets/index.js'

import { Query } from '$lib/api/executor.js'

import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { queryWatchlistName } from '../watchlist/api.js'
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js'

export type TSocialTrendsApiAlert = TApiAlert<
  {
    type: 'trending_words'
  } & (
    | {
        target: { slug: TAssetSlug[] }
        operation: { trending_project: true }
      }
    | {
        target: { word: string[] }
        operation: { trending_word: true }
      }
    | {
        target: { watchlist_id: number }
        operation: { trending_project: true }
      }
  )
>

export type TBaseSchema = TAlertBaseSchema<
  'social-trends',
  {
    steps: [typeof STEP_SELECT_TREND_SCHEMA]

    deduceApiAlert: (apiAlert: TSocialTrendsApiAlert) => boolean
  }
>

export const ALERT_SOCIAL_TRENDS_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'social-trends',

  ui: {
    label: 'Social trends',
    description: 'Create an alert for any of the social words, asset or watchlist',
    icon: 'comment',
  },

  steps: [STEP_SELECT_TREND_SCHEMA],

  deduceApiAlert(apiAlert) {
    return apiAlert.settings?.type === 'trending_words'
  },

  async suggestTitle([trendStep]) {
    const { target } = trendStep.state.$$

    if ('slug' in target) return `${target.slug} in trending assets`

    if ('word' in target) return `${target.word} in trending words`

    if ('watchlist_id' in target) {
      const watchlistName = await queryWatchlistName(Query)(target.watchlist_id)

      return `"${watchlistName}" is trending`
    }

    return ''
  },

  suggestDescription(_steps) {
    return ''
  },
})
