import type { DateTimeDuration } from '@internationalized/date'
import type { DateRange } from 'bits-ui'

import { CalendarDateTime, Time, toCalendarDateTime, today } from '@internationalized/date'

type Preset = {
  id: string
  title: string
  range: DateRange
}

function Preset(id: string, title: string, diff: DateTimeDuration, timeZone: string): Preset {
  const end = toCalendarDateTime(today(timeZone), new Time(23, 59, 59, 999))
  const start = end.subtract(diff)

  return {
    id,
    title,
    range: { start, end },
  }
}

export const getPresets = (tz: string): Preset[] => [
  Preset('1d', 'Last day', { days: 1 }, tz),
  Preset('7d', 'Last week', { days: 7 }, tz),
  Preset('30d', 'Last month', { months: 1 }, tz),
  Preset('90d', 'Last 3 months', { months: 3 }, tz),
  Preset('180d', 'Last 6 months', { months: 6 }, tz),
  Preset('1y', 'Last year', { years: 1 }, tz),
  {
    id: 'all',
    title: 'All time',
    range: {
      start: new CalendarDateTime(2009, 1, 5),
      end: toCalendarDateTime(today(tz), new Time(23, 59, 59, 999)),
    },
  },
]
