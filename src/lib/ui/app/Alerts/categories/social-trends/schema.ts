import type { TAssetSlug } from '$lib/ctx/assets/index.svelte.js'
import type { TApiAlert } from '../../types.js'

import { createAlertSchema, type TAlertBaseSchema } from '../types.js'

export type TBaseSchema = TAlertBaseSchema<
  'social-trends',
  {
    steps: []

    deduceApiAlert: (
      apiAlert: TApiAlert<
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
      >,
    ) => boolean
  }
>

export const ALERT_SOCIAL_TRENDS_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'social-trends',

  category: {
    label: 'Social trends',
    description: 'Create an alert for any of the social words, asset or watchlist',
    icon: 'comment',
  },

  steps: [],

  deduceApiAlert(apiAlert) {
    return apiAlert.settings?.type === 'trending_words'
  },
})
