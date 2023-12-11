import type { AreaType } from '@/ui/MiniChart/MultiArea.svelte'

import { formatUsd } from '@/utils/formatting'

function randomNum(min: number, max: number, step: number) {
  return min + Math.floor((Math.random() * (max - min + 1)) / step) * step
}

function getRandomValues(count: number, min: number, max: number, step: number) {
  return new Array(count).fill(undefined).map(() => randomNum(min, max, step))
}

export const volumes = getRandomValues(20, 20, 100, 1)

export const prices = getRandomValues(20, 100, 3000, 50)

export const multiAreas: AreaType[] = [
  {
    data: getRandomValues(20, 20, 100, 1),
    color: 'cyan',
    title: 'Soc. V.',
  },
  {
    data: getRandomValues(20, 100, 3000, 50),
    color: 'red',
    title: 'Price',
    formatter: formatUsd,
  },
]
