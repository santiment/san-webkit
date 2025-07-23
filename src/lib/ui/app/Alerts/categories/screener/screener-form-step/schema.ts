import type { TScreenerApiAlert } from '../schema.js'
import type { Watchlist } from '../../watchlist/api.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'
import Legend from './ui/Legend.svelte'

export type TScreenerState = {
  metric: NonNullable<TScreenerApiAlert['settings']>['metric']
  screener: {
    id: Watchlist['id'] | null
    title: string
  }
}

export type TBaseSchema = TStepBaseSchema<
  'screener',
  {
    initState: (apiAlert?: null | Partial<TScreenerApiAlert>) => TScreenerState
  }
>

export const STEP_SELECT_SCREENER_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'screener',
  ui: {
    title: 'Select Screener',
    label: 'Select Screener',
    description: 'You can choose any of your screeners',

    Form,
    Legend,
  },

  initState(apiAlert) {
    const watchlist_id = apiAlert?.settings?.target.watchlist_id || null

    return {
      metric: 'social_volume_total',
      screener: { id: watchlist_id, title: '' },
    }
  },

  validate(state) {
    return !!state.screener.id
  },

  reduceToApi(apiAlert, { metric, screener }) {
    Object.assign(apiAlert.settings, { type: 'screener_signal' })
    Object.assign(apiAlert.settings, {
      metric,
      target: { watchlist_id: screener.id },
    })
    Object.assign(apiAlert.settings, {
      operation: { selector: { watchlist_id: screener.id } },
    })

    return apiAlert
  },
})
