import { parseRangeString } from '$lib/utils/dates/index.js'
import { keyify } from '$lib/utils/object.js'

export const TimeModifiers = keyify({
  m: { label: 'Minute(s)', name: 'minute' },
  h: { label: 'Hour(s)', name: 'hour' },
  d: { label: 'Day(s)', name: 'day' },
})

export type TApiTimeWindow = `${number}${'m' | 'h' | 'd' | 'w'}`

export type TTimeModifier = keyof typeof TimeModifiers

export type TTimeWindow = `${number}${TTimeModifier}`

export function getTimeFromApi(timeSetting: TApiTimeWindow): TTimeWindow {
  const { amount, modifier } = parseRangeString(timeSetting)
  if (modifier === 'w') return `${amount * 7}d`

  return `${amount}${modifier}`
}
