import type { TApiAlert } from '$ui/app/Alerts/types.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Component from './ui/index.svelte'

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'assets',
  {
    initState: (apiAlert?: null | TApiAlert) => {
      slugs: string[]
    }
  }
>

export const STEP_ASSETS_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'assets',
  Component,

  initState() {
    return {
      slugs: [],
    }
  },

  validate(state) {
    return state.slugs.length > 0
  },
})
