import type { Builder } from 'bits-ui'
import type { ActionReturn } from 'svelte/action'

import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { BROWSER } from 'esm-env'

export { applyStyles, preserveStyles, type TStyles } from 'drawer-svelte'

export function cn(...classLists: ClassNameValue[]) {
  return twMerge(...classLists)
}

export const getBrowserCssVariable = (color: string) =>
  BROWSER ? getComputedStyle(document.body).getPropertyValue(`--${color}`) : ''

export function applyBuilder(node: HTMLElement, builder: Builder) {
  const { action, ...attrs } = builder
  const handler = action(node) as ActionReturn

  for (const key in attrs) {
    const value = attrs[key]
    if (value !== undefined) node.setAttribute(key, value)
  }

  return handler
}

export { styleToString, flyAndScale } from './transitions.js'
