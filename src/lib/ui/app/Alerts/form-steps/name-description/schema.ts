import type { TApiAlert } from '../../types.js'

import { createStepSchema, type TStepBaseSchema } from '../types.js'
import Component from './ui/index.svelte'

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'name-description',
  {
    initState: (apiAlert?: null | TApiAlert) => {
      title: string
      description: string
    }
  }
>

export const STEP_NAME_DESCRIPTION_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'name-description',
  Component,

  initState(apiAlert) {
    const { title, description } = apiAlert ?? {}
    return { title: title ?? '', description: description ?? '' }
  },

  validate(state) {
    return !!state.title
  },
})
