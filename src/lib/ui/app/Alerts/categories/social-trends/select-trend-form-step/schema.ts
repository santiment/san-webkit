import type { TSocialTrendsApiAlert } from '../schema.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'select-trend',
  {
    initState: (
      apiAlert?: null | TSocialTrendsApiAlert,
    ) => Pick<NonNullable<TSocialTrendsApiAlert['settings']>, 'target' | 'operation'>
  }
>

export const STEP_SELECT_TREND_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'select-trend',
  ui: {
    title: 'Select Social trend',
    label: 'Select Social trend',
    description: 'You can choose any social word, asset or watchlist',

    Form,
  },

  initState(apiAlert) {
    const { target, operation } = apiAlert?.settings || {}

    if (target && operation) {
      return { target, operation }
    }

    return {
      target: { slug: [] },
      operation: { trending_project: true },
    }
  },

  validate(state) {
    return !!state.target && (Array.isArray(state.target) ? state.target.length > 0 : true)
  },
})
