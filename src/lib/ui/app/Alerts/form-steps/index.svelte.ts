import type { TApiAlert } from '../types.js'
import type { TStepBaseSchema, TStepSchema, TStepUI } from './types.js'
import type { IfAny } from '$lib/utils/types/index.js'

export function createAlertStep<GStepSchema extends TStepSchema>(
  apiAlert: undefined | null | Partial<TApiAlert>,
  schema: GStepSchema,
): TAlertStep<GStepSchema> {
  let _state = $state<ReturnType<GStepSchema['initState']>>(schema.initState(apiAlert))
  const _isValid = $derived(schema.validate(_state))

  return {
    name: schema.name,
    ui: schema.ui,

    reduceToApi: schema.reduceToApi,

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

export type TBaseState<
  GStepSchema extends TStepBaseSchema<string, any> = TStepBaseSchema<string, any>,
> = {
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

export type TAlertStep<
  GStepSchema extends TStepBaseSchema<string, any> = TStepBaseSchema<string, any>,
> = {
  name: GStepSchema['name']
  ui: TStepUI<{ state: TBaseState<GStepSchema> }>['ui']

  reduceToApi: GStepSchema['reduceToApi']

  state: TBaseState<GStepSchema>

  isValid: {
    get $(): boolean
  }
}
