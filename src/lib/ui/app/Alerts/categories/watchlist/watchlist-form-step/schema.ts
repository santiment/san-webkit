import type { TWatchlistApiAlert } from '../schema.js'
import type { Watchlist } from '../api.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'

export type TBaseSchema = TStepBaseSchema<
  'watchlist',
  {
    initState: (apiAlert?: null | TWatchlistApiAlert) => {
      target: { watchlist_id: Watchlist['id'] | null }
    }
  }
>

export const STEP_SELECT_WATCHLIST_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'watchlist',
  ui: {
    title: 'Select Watchlist',
    label: 'Select Watchlist',
    description: 'You can choose any of your watchlists',

    Form,
  },

  initState(apiAlert) {
    return {
      target: {
        watchlist_id: apiAlert?.settings?.target.watchlist_id || null,
      },
    }
  },

  validate(state) {
    return !!state.target.watchlist_id
  },

  reduceToApi(apiAlert, state) {
    Object.assign(apiAlert.settings, state)

    return apiAlert
  },
})
