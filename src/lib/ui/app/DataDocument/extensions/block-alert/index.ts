import { type Component as TComponent } from 'svelte'

import Component from './Component.svelte'
import { createSvelteBlockSpec } from '../utils.js'

export const BLOCK_ALERT_SCHEMA = {
  type: 'alert',
  Component: Component as TComponent,
}

export const BlockAlert = createSvelteBlockSpec(BLOCK_ALERT_SCHEMA, {})
