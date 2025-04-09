import type { TApiAlert } from '../../types.js'

import { parseRangeString } from '$lib/utils/dates/index.js'

import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { TimeModifiers } from '../../time.js'
import { formatChannels } from '../../channels.js'

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

  suggestTitle([screenerStep]) {
    const { watchlist_id } = screenerStep.state.$$.target

    return `Project enters/exits ${watchlist_id}` //FIXME: Find watchlist name
  },

  suggestDescription([screenerStep, notificationStep]) {
    const { watchlist_id } = screenerStep.state.$$.target
    const { cooldown, channel } = notificationStep.state.$$

    const { amount, modifier } = parseRangeString(cooldown)

    const cooldownLabel = TimeModifiers[modifier].label.toLowerCase()

    return `Notify me when any project enters/exits ${watchlist_id}. Send me notifications every ${amount} ${cooldownLabel} via ${formatChannels(channel)}.`
  },
})
