import type { Builder } from 'bits-ui'
import type { ActionReturn } from 'svelte/action'
import type { TransitionConfig } from 'svelte/transition'

import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { cubicOut } from 'svelte/easing'
import { BROWSER } from 'esm-env'

export function cn(...classLists: ClassNameValue[]) {
  return twMerge(...classLists)
}

export const getBrowserCssVariable = (color: string) =>
  BROWSER ? getComputedStyle(document.documentElement).getPropertyValue(`--${color}`) : ''

export function applyBuilder(node: HTMLElement, builder: Builder) {
  const { action, ...attrs } = builder
  const handler = action(node) as ActionReturn

  for (const key in attrs) {
    const value = attrs[key]
    if (value !== undefined) node.setAttribute(key, value)
  }

  return handler
}

type FlyAndScaleParams = {
  y?: number
  x?: number
  start?: number
  duration?: number
}

export function styleToString(style: Record<string, number | string | undefined>): string {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === undefined) return str
    return `${str}${key}:${style[key]};`
  }, '')
}

export function flyAndScale(
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 },
): TransitionConfig {
  const style = getComputedStyle(node)
  const transform = style.transform === 'none' ? '' : style.transform

  const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
    const [minA, maxA] = scaleA
    const [minB, maxB] = scaleB

    const percentage = (valueA - minA) / (maxA - minA)
    const valueB = percentage * (maxB - minB) + minB

    return valueB
  }

  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0])
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0])
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1])

      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t,
      })
    },
    easing: cubicOut,
  }
}
