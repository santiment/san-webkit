import type { Component } from 'svelte'
import type { TApiAlert } from '../types.js'
import type { TBaseState } from './index.svelte.js'

export type TStepBaseSchema<
  GName,
  GAlert extends Partial<TApiAlert>,
  GState extends { [key: string]: unknown },
> = {
  name: GName

  initState: (apiAlert?: null | Partial<GAlert>) => GState

  validate: (state: GState) => boolean

  reduceToApi: (state: GState) => GAlert
}

export type TStepUI = {
  ui: {
    title: string
    label: string
    description: string

    Form: Component<{ state: TBaseState<any> }>
    Legend?: Component<{ state: TBaseState<any> }>
  }
}

export type TStepSchema = TStepBaseSchema<string, Partial<TApiAlert>, any> & TStepUI

export function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any, any> = any>(
  base: GBaseSchema & TStepUI,
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    initState: base.initState as GBaseSchema['initState'],
    validate: base.validate as GBaseSchema['validate'],

    ui: base.ui as TStepUI['ui'],

    reduceToApi: base.reduceToApi as GBaseSchema['reduceToApi'],
  } as const

  return schema
}
