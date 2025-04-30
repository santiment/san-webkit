import type { Component as TComponent } from 'svelte'

import Component from './index.svelte'
import img from './san.svg'

export const SanTokenBurningMethod = {
  name: 'San token burning',
  img,
  Component: Component as TComponent,
}
