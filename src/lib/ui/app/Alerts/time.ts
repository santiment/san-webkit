import { keyify } from '$lib/utils/object.js'

export const TimeModifiers = keyify({
  m: { frequencyLabel: 'Minutely', name: 'minute' },
  h: { frequencyLabel: 'Hourly', name: 'hour' },
  d: { frequencyLabel: 'Daily', name: 'day' },
  w: { frequencyLabel: 'Weekly', name: 'week' },
})

export type TTimeModifier = keyof typeof TimeModifiers

export type TTimeWindow = `${number}${TTimeModifier}`
