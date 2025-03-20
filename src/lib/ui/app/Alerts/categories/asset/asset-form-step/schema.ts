import type { TAssetApiAlert } from '../schema.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Component from './ui/index.svelte'

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'assets',
  {
    initState: (apiAlert?: null | TAssetApiAlert) => {
      slug: string[]
    }
  }
>

export const STEP_ASSETS_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'assets',
  Component,

  initState(apiAlert) {
    return {
      slug: apiAlert?.settings?.target.slug || [],
    }
  },

  validate(state) {
    return state.slug.length > 0
  },
})
