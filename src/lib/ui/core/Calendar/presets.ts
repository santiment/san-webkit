import type { DateTimeDuration } from '@internationalized/date'
import type { DateRange } from 'bits-ui'

import { CalendarDateTime, Time, toCalendarDateTime, today } from '@internationalized/date'

type Preset = {
  title: string
  range: DateRange
}

function Preset(title: string, diff: DateTimeDuration, timeZone: string): Preset {
  const end = toCalendarDateTime(today(timeZone), new Time(23, 59, 59, 999))
  const start = end.subtract(diff)

  return {
    title,
    range: { start, end },
  }
}

export const getPresets = (tz: string): Preset[] => [
  Preset('Last day', { days: 1 }, tz),
  Preset('Last week', { days: 7 }, tz),
  Preset('Last month', { months: 1 }, tz),
  Preset('Last 3 months', { months: 3 }, tz),
  Preset('Last 6 months', { months: 6 }, tz),
  Preset('Last year', { years: 1 }, tz),
  {
    title: 'All time',
    range: {
      start: new CalendarDateTime(2009, 1, 5),
      end: toCalendarDateTime(today(tz), new Time(23, 59, 59, 999)),
    },
  },
]
