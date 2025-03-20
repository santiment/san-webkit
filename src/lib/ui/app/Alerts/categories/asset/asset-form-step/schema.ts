import type { TAssetApiAlert } from '../schema.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'
import Legend from './ui/Legend.svelte'

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'assets',
  {
    initState: (apiAlert?: null | TAssetApiAlert) => {
      target: { slug: string[] }
    }
  }
>

export const STEP_ASSETS_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'assets',
  ui: {
    title: 'Select Asset',
    label: 'Select Asset',
    description: 'You can create an alert for a specific asset. Choose one or multiple assets',

    Form,
    Legend,
  },

  initState(apiAlert) {
    return {
      target: {
        slug: apiAlert?.settings?.target.slug || [],
      },
    }
  },

  validate(state) {
    return state.target.slug.length > 0
  },

  reduceToApi(apiAlert, state) {
    Object.assign(apiAlert.settings, state)

    return apiAlert
  },
})
