import type { Component } from 'svelte'
import type { TApiAlert } from '../types.js'

export type TStepBaseSchema<
  GName,
  GProps extends {
    initState: (apiAlert?: null | TApiAlert) => { [key: string]: unknown }
  },
> = {
  name: GName

  initState: GProps['initState']

  validate: (state: ReturnType<GProps['initState']>) => boolean
}

export type TStepUI = {
  ui: {
    title: string
    label: string
    description: string

    Form: Component<any>
    Legend?: Component<any>
  }
}

export type TStepSchema = TStepBaseSchema<
  string,
  {
    initState: (apiAlert?: null | TApiAlert) => any
  }
> &
  TStepUI

export function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any> = any>(
  base: GBaseSchema & TStepUI,
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    initState: base.initState as GBaseSchema['initState'],
    validate: base.validate as GBaseSchema['validate'],

    ui: base.ui,
  } as const

  return schema
}
