import type { TScreenerApiAlert } from '../schema.js'

import assert from 'assert'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'
import Legend from './ui/Legend.svelte'

export type TScreenerState = {
  metric: NonNullable<TScreenerApiAlert['settings']>['metric']
  screener: {
    id: string | null
    title: string
  }
}

export type TBaseSchema = TStepBaseSchema<'screener', TScreenerApiAlert, TScreenerState>

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
    return {
      metric: 'social_volume_total',
      screener: { id: getApiWatchlistId(apiAlert?.settings), title: '' },
    }
  },

  validate(state) {
    return !!state.screener.id
  },

  reduceToApi({ metric, screener }) {
    assert(screener.id, 'Screener is not selected')

    return {
      settings: {
        type: 'screener_signal',
        metric,
        target: { watchlist_id: screener.id },
        operation: { selector: { watchlist_id: screener.id } },
      },
    }
  },
})

function getApiWatchlistId(settings: TScreenerApiAlert['settings'] | undefined): string | null {
  if (!settings) return null
  if (settings.target === 'default') {
    return settings.operation.selector.watchlist_id.toString()
  }

  const { watchlist_id } = settings.target
  return watchlist_id !== null ? watchlist_id.toString() : null
}
