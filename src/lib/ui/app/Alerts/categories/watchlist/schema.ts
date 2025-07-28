import type { TApiAlert } from '../../types.js'

import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_SELECT_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js'
import {
  defaultMetricDescription,
  defaultMetricTitle,
} from '../../form-steps/name-description/utils.js'

export type TWatchlistApiAlert = TApiAlert<{
  type: 'metric_signal'
  target: { watchlist_id: number }
}>

export type TBaseSchema = TAlertBaseSchema<
  'watchlist',
  {
    steps: [typeof STEP_SELECT_WATCHLIST_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA]
    deduceApiAlert: (apiAlert: Partial<TWatchlistApiAlert>) => boolean
  }
>

export const ALERT_WATCHLIST_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'watchlist',

  ui: {
    label: 'Watchlist',
    description: 'Create an alert for the specific watchlist of yours',
    icon: 'watchlist',
  },

  steps: [STEP_SELECT_WATCHLIST_SCHEMA, STEP_METRIC_CONDITIONS_SCHEMA],

  deduceApiAlert({ settings }) {
    return Boolean(settings?.type.includes('metric_signal') && settings?.target.watchlist_id)
  },

  suggestTitle([watchlistStep, metricStep]) {
    const { title } = watchlistStep.state.$$.watchlist

    return defaultMetricTitle(`"${title}"`, metricStep.state.$$)
  },

  suggestDescription([watchlistStep, metricStep, notificationStep]) {
    const { title } = watchlistStep.state.$$.watchlist

    return defaultMetricDescription(`"${title}"`, metricStep.state.$$, notificationStep.state.$$)
  },
})
