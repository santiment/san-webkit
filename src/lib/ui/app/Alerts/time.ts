import { keyify } from '$lib/utils/object.js'

export const TimeModifiers = keyify({
  m: { label: 'Minute(s)', name: 'minute' },
  h: { label: 'Hour(s)', name: 'hour' },
  d: { label: 'Day(s)', name: 'day' },
  w: { label: 'Week(s)', name: 'week' },
})

export type TTimeModifier = keyof typeof TimeModifiers

export type TTimeWindow = `${number}${TTimeModifier}`
