import type { Component } from 'svelte'
import type { TApiAlert } from '../types.js'
import type { TStepBaseSchema, TStepSchema } from './types.js'
import type { IfAny } from '$lib/utils/types/index.js'

export function createAlertStep<GStepSchema extends TStepSchema>(
  apiAlert: undefined | null | TApiAlert,
  schema: GStepSchema,
) {
  let _state = $state<{ [key: string]: unknown }>(schema.initState(apiAlert))
  const _isValid = $derived(schema.validate(_state))

  return {
    name: schema.name,
    Component: schema.Component,

    state: {
      get $$() {
        return _state
      },

      set $$(value) {
        _state = value
      },
    },

    isValid: {
      get $() {
        return _isValid
      },
    },
  }
}

export type TAlertStep<GStepSchema extends TStepBaseSchema<string, any>> = {
  name: GStepSchema['name']
  Component: Component<any>

  state: {
    get $$(): IfAny<
      ReturnType<GStepSchema['initState']>,
      unknown,
      ReturnType<GStepSchema['initState']>
    >

    set $$(
      value: IfAny<
        ReturnType<GStepSchema['initState']>,
        unknown,
        ReturnType<GStepSchema['initState']>
      >,
    )
  }

  isValid: {
    get $(): boolean
  }
}
