import type { TApiAlert } from '../../types.js'

import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js'

export type TWatchlistApiAlert = TApiAlert<{
  type: 'metric_signal'
  target: { watchlist_id: number }
}>

export type TBaseSchema = TAlertBaseSchema<
  'watchlist',
  {
    steps: [typeof STEP_WATCHLIST_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA]
    deduceApiAlert: (apiAlert: TWatchlistApiAlert) => boolean
  }
>

export const ALERT_WATCHLIST_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'watchlist',

  ui: {
    label: 'Watchlist',
    description: 'Create an alert for the specific watchlist of yours',
    icon: 'watchlist',
  },

  steps: [STEP_WATCHLIST_SCHEMA, STEP_METRIC_CONDITIONS_SCHEMA],

  deduceApiAlert({ settings }) {
    return Boolean(settings?.type.includes('metric_signal') && settings?.target.watchlist_id)
  },
})
