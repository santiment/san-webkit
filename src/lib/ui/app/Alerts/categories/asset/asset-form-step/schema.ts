import type { TAssetApiAlertPart } from '../schema.js'
import type { TAssetSlug } from '$lib/ctx/assets/api.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'
import Legend from './ui/Legend.svelte'

export type TAssetState = {
  target: {
    slugs: TAssetSlug[]
    namesMap: Map<TAssetSlug, string>
  }
}

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<'assets', TAssetApiAlertPart, TAssetState>

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
        slugs: apiAlert?.settings?.target.slug || [],
        namesMap: new Map(),
      },
    }
  },

  validate(state) {
    return state.target.slugs.length > 0
  },

  reduceToApi: (state) => ({
    settings: { type: 'metric_signal', target: { slug: state.target.slugs } },
  }),
})
