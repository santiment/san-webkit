import type { Component } from 'svelte'
import type { TApiAlert } from '../types.js'
import type { TBaseState } from './index.svelte.js'

export type TStepBaseSchema<
  GName,
  GProps extends {
    initState: (apiAlert?: null | Partial<TApiAlert>) => { [key: string]: unknown }
  },
> = {
  name: GName

  initState: GProps['initState']

  validate: (state: ReturnType<GProps['initState']>) => boolean

  reduceToApi: (
    apiAlert: { settings: object },
    state: ReturnType<GProps['initState']>,
  ) => { settings: object }
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

export type TStepSchema = TStepBaseSchema<
  string,
  {
    initState: (apiAlert?: null | Partial<TApiAlert>) => any
  }
> &
  TStepUI<any>

export function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any> = any>(
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
