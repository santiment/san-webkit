import type { Component } from 'svelte'
import type { TApiAlert } from '../types.js'
import type { TBaseState } from './index.svelte.js'
import type { DeepPartial } from '$lib/utils/types/index.js'

export type TStepBaseSchema<
  GName,
  GAlert extends TApiAlert,
  GState extends { [key: string]: unknown },
> = {
  name: GName

  initState: (apiAlert?: null | Partial<GAlert>) => GState

  validate: (state: GState) => boolean

  reduceToApi: (state: GState) => DeepPartial<GAlert>
}

export type TStepUI<GState extends Record<string, any>> = {
  ui: {
    title: string
    label: string
    description: string

    Form: Component<GState>
    Legend?: Component<GState>
  }
}

export type TStepSchema = TStepBaseSchema<string, TApiAlert, any> & TStepUI<any>

export function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any, any> = any>(
  base: GBaseSchema & TStepUI<{ state: TBaseState<GBaseSchema> }>,
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    initState: base.initState as GBaseSchema['initState'],
    validate: base.validate as GBaseSchema['validate'],

    ui: base.ui,

    reduceToApi: base.reduceToApi as GBaseSchema['reduceToApi'],
  } as const

  return schema
}
