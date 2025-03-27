import { keyify } from '$lib/utils/object.js'

export const TimeFormats = keyify({
  m: { frequencyLabel: 'Minutely', name: 'minute' },
  h: { frequencyLabel: 'Hourly', name: 'hour' },
  d: { frequencyLabel: 'Daily', name: 'day' },
  w: { frequencyLabel: 'Weekly', name: 'week' },
})

export type TTimeFormat = keyof typeof TimeFormats

export type TTimeWindow = `${number}${TTimeFormat}`
