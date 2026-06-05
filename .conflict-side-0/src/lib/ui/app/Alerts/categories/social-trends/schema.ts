import type { TAssetSlug } from '$lib/ctx/assets/index.js'

import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js'
import { getAssetTargetTitle } from '../asset/utils.js'

export type TSocialTrendsApiAlert = {
  settings: {
    type: 'trending_words'
  } & TSocialTrendsApiAlertTarget
}

export type TSocialTrendsApiAlertTarget =
  | {
      target: { slug: TAssetSlug[] }
      operation: { trending_project: true }
    }
  | {
      target: { word: string[] }
      operation: { trending_word: true }
    }
  | {
      target: { watchlist_id: number | null }
      operation: { trending_project: true }
    }

export type TBaseSchema = TAlertBaseSchema<
  'social-trends',
  {
    steps: [typeof STEP_SELECT_TREND_SCHEMA]

    deduceApiAlert: (apiAlert: Partial<TSocialTrendsApiAlert>) => boolean
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

    switch (target.type) {
      case 'asset':
        return `${getAssetTargetTitle(target)} in trending assets`
      case 'word':
        return `${target.words.join(', ')} in trending words`
      case 'watchlist':
        return `"${target.title}" is trending`
    }
  },

  suggestDescription(_steps) {
    return ''
  },
})
