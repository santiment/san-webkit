export const ONE_SECOND_IN_MS = 1000
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60
export const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24
export const ONE_WEEK_IN_MS = ONE_DAY_IN_MS * 7
export const ONE_MONTH_IN_MS = 2505600000 // Estimate
export const ONE_YEAR_IN_MS = 31536000000 // Estimate

/**
 *
 * @param target - target date in ISO format
 * @param start - timestamp of the start date
 * @returns positive number of days if target date is in the future, negative number if target date is in the past
 */
export const calculateDaysTo = (target: Date | string, start = Date.now()): number =>
  Math.ceil(((typeof target === 'string' ? Date.parse(target) : +target) - start) / ONE_DAY_IN_MS)

export function setDayEnd(date: Date, { utc = false } = {}) {
  const UTC = utc ? 'UTC' : ''
  date[`set${UTC}Hours`](23, 59, 59, 0)
  return date
}

export function setDayStart(date: Date, { utc = false } = {}) {
  const UTC = utc ? 'UTC' : ''
  date[`set${UTC}Hours`](0, 0, 1, 0)
  return date
}

export const getTodaysEnd = (options?: { utc: boolean }) => setDayEnd(new Date(), options)

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const
export const SHORT_MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export const SHORT_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

type TFormattedDate = {
  D: number
  DD: string | number
  M: number
  MM: string | number
  MMM: (typeof SHORT_MONTH_NAMES)[number]
  MMMM: (typeof MONTH_NAMES)[number]
  YY: string
  YYYY: number

  ddd: (typeof SHORT_WEEKDAYS)[number]
  dddd: (typeof WEEKDAYS)[number]
}

export function getDateFormats(date: Date, { utc = false } = {}): TFormattedDate {
  const UTC = utc ? 'UTC' : ''

  const month = date[`get${UTC}Month`]()
  const M = month + 1
  const D = date[`get${UTC}Date`]()
  const YYYY = date[`get${UTC}FullYear`]()

  const d = date[`get${UTC}Day`]()

  return {
    D,
    DD: D < 10 ? `0${D}` : D,
    M,
    MM: M < 10 ? `0${M}` : M,
    MMM: SHORT_MONTH_NAMES[month],
    MMMM: MONTH_NAMES[month],
    YYYY,
    YY: YYYY.toString().slice(-2),

    ddd: SHORT_WEEKDAYS[d],
    dddd: WEEKDAYS[d],
  }
}

export function getFormattedMonthDayYear(date: Date, options = {}) {
  const { MMM, D, YYYY } = getDateFormats(date, options)
  return `${MMM} ${D}, ${YYYY}`
}

export function getFormattedDetailedTimestamp(
  datetime: number | Date,
  options?: { utc?: boolean },
) {
  const date = datetime instanceof Date ? datetime : new Date(datetime)
  const { ddd, DD, MMM, YY } = getDateFormats(date, options)
  const { HH, mm } = getTimeFormats(date, options)

  return `${ddd} ${DD} ${MMM}'${YY}  ${HH}:${mm}`
}

export function getFormattedDayMonthYear(datetime: number | Date, options?: { utc?: boolean }) {
  const date = datetime instanceof Date ? datetime : new Date(datetime)

  const { DD, MMM, YY } = getDateFormats(date, options)
  return `${DD} ${MMM}'${YY}`
}

export function modifyDate(date: Date, modifier: { days: number; utc?: boolean }) {
  const UTC = modifier.utc ? 'UTC' : ''
  date[`set${UTC}Date`](date[`get${UTC}Date`]() + modifier.days)
  return date
}

export function getTimeSince(targetDate: Date) {
  const now = new Date()
  const delta = now.getTime() - targetDate.getTime()

  const seconds = Math.floor(delta / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 365)

  if (seconds < 60) {
    return `${seconds} seconds`
  } else if (minutes < 60) {
    return `${minutes} minutes`
  } else if (hours < 24) {
    return `${hours} hours`
  } else if (days < 365) {
    return `${days} days`
  } else {
    return `${years} years`
  }
}

type TFormattedTime = {
  H: number
  HH: number | string
  m: number
  mm: number | string
}
export function getTimeFormats(date: Date, { utc = false } = {}): TFormattedTime {
  const UTC = utc ? 'UTC' : ''

  const m = date[`get${UTC}Minutes`]()
  const H = date[`get${UTC}Hours`]()
  // const s = date[`get${UTC}Seconds`]()

  return {
    H,
    HH: H < 10 ? `0${H}` : H,
    m,
    mm: m < 10 ? `0${m}` : m,
  }
}

export const CRYPTO_ERA_START_DATE = setDayStart(new Date('2009-01-01T00:00:00.000Z'), {
  utc: true,
})
export const CRYPTO_ERA_START_ISO = CRYPTO_ERA_START_DATE.toISOString()

export const TODAY_END_DATE = setDayEnd(new Date(), { utc: true })

export const DAYS_SINCE_CRYPTO_ERA_START = calculateDaysTo(TODAY_END_DATE, +CRYPTO_ERA_START_DATE)

export function parseRangeString<T extends string>(range: T) {
  type TimeFormat<T extends string> = T extends `${number}${infer Format}` ? Format : string

  const amount = parseInt(range, 10)
  return {
    amount,
    modifier: range.slice(amount.toString().length) as TimeFormat<T>,
  }
}

export function parseDate(date: string, options?: { utc?: boolean }) {
  if (date === 'utc_now') {
    return new Date()
  }

  if (date.startsWith('utc_now')) {
    const [, range] = date.split('-')

    const { amount, modifier } = parseRangeString(range as `${number}${'m' | 'h' | 'd' | 'y'}`)
    const days = modifier === 'y' ? amount * 365 : modifier === 'd' ? amount : 1

    return modifyDate(new Date(), { days: -days, utc: options?.utc })
  }

  return new Date(date)
}

export const parseAsStartEndDate = (date: string, options: { dayStart: boolean; utc?: boolean }) =>
  (options.dayStart ? setDayStart : setDayEnd)(parseDate(date), options)

export function suggestPeriodInterval(from: Date, to: Date) {
  const diff = (+to - +from) / ONE_DAY_IN_MS

  if (diff < 7) return '15m'
  if (diff < 14) return '30m'
  if (diff < 20) return '1h'
  if (diff < 33) return '2h'
  if (diff < 63) return '3h'
  if (diff < 100) return '4h'
  if (diff < 185) return '6h'
  if (diff < 360) return '8h'
  if (diff < 520) return '12h'
  if (diff < 800) return '1d'
  if (diff < 1400) return '2d'

  return '7d'
}

export { TimeZones, type TTimeZone } from './timezone.js'
