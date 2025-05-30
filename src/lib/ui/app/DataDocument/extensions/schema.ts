import type { Component as TComponent } from 'svelte'

import { BlockNoteSchema, defaultBlockSpecs } from '@blocknote/core'

import { BLOCK_ALERT_SCHEMA, BlockAlert } from './block-alert/index.js'

export const CUSTOM_SCHEMAS = [BLOCK_ALERT_SCHEMA] as const

export const CUSTOM_SCHEMAS_MAP = CUSTOM_SCHEMAS.reduce(
  (acc, item) => Object.assign(acc, { [item.type]: item }),
  {},
) as Record<string, undefined | { type: string; Component: TComponent }>

export const createEditorSchema = () =>
  BlockNoteSchema.create({
    blockSpecs: {
      // enable the default blocks if desired
      ...defaultBlockSpecs,

      // Add your own custom blocks:
      ...reduceSpecs([BlockAlert]),
    },
  })

function reduceSpecs<GSpecs extends { config: { type: string } }>(specs: GSpecs[]) {
  return specs.reduce(
    (acc, spec) =>
      Object.assign(acc, {
        [spec.config.type]: spec,
      }),
    {},
  )
}
