import type { TApiAlert } from '../../types.js'

import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'

export type TScreenerApiAlert = TApiAlert<{
  type: 'screener_signal'
  metric: 'social_volume_total'
  target: { watchlist_id: number | null }
}>

export type TBaseSchema = TAlertBaseSchema<
  'screener',
  {
    steps: [typeof STEP_SELECT_SCREENER_SCHEMA]

    deduceApiAlert: (apiAlert: TScreenerApiAlert) => boolean
  }
>

export const ALERT_SCREENER_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'screener',

  ui: {
    label: 'Screener',
    description: 'Create an alert for one of your screeners',
    icon: 'screener',
  },

  steps: [STEP_SELECT_SCREENER_SCHEMA],

  deduceApiAlert(apiAlert) {
    return apiAlert.settings?.type === 'screener_signal'
  },
})
