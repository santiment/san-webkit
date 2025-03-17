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

export type TStepSchema = TStepBaseSchema<
  string,
  {
    initState: (apiAlert?: null | TApiAlert) => any
  }
> & { Component: Component<any> }

export function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any> = any>(
  base: GBaseSchema & { Component: Component<any> },
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    Component: base.Component,
    initState: base.initState as GBaseSchema['initState'],
    validate: base.validate as GBaseSchema['validate'],
  } as const

  return schema
}
