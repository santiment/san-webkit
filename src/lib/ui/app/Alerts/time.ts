import { keyify } from '$lib/utils/object.js'

export const TimeModifiers = keyify({
  m: { frequencyLabel: 'Minutely', label: 'Minute(s)', name: 'minute' },
  h: { frequencyLabel: 'Hourly', label: 'Hour(s)', name: 'hour' },
  d: { frequencyLabel: 'Daily', label: 'Day(s)', name: 'day' },
  w: { frequencyLabel: 'Weekly', label: 'Week(s)', name: 'week' },
})

export type TTimeModifier = keyof typeof TimeModifiers

export type TTimeWindow = `${number}${TTimeModifier}`
