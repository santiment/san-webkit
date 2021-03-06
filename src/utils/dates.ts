export const ONE_SECOND_IN_MS = 1000
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60
export const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24
export const ONE_WEEK_IN_MS = ONE_DAY_IN_MS * 7
export const ONE_MONTH_IN_MS = 2505600000 // Estimate
export const ONE_YEAR_IN_MS = 31536000000 // Estimate

const MONTH_NAMES = [
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
const SHORT_MONTH_NAMES = [
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

type FormattedDate = {
  D: number
  DD: string | number
  M: number
  MM: string | number
  MMM: typeof SHORT_MONTH_NAMES[number]
  MMMM: typeof MONTH_NAMES[number]
  YY: string
  YYYY: number
}

export function getDateFormats(date: Date): FormattedDate {
  const month = date.getMonth()
  const M = month + 1
  const D = date.getDate()
  const YYYY = date.getFullYear()

  return {
    D,
    DD: D < 10 ? `0${D}` : D,
    M,
    MM: M < 10 ? `0${M}` : M,
    MMM: SHORT_MONTH_NAMES[month],
    MMMM: MONTH_NAMES[month],
    YYYY,
    YY: YYYY.toString().slice(-2),
  }
}

type FormattedTime = {
  H: number
  HH: string | number
  m: number
  mm: string | number
  s: number
  ss: string | number
}
export function getTimeFormats(date: Date): FormattedTime {
  const m = date.getMinutes()
  const s = date.getSeconds()
  const H = date.getHours()

  return {
    H,
    HH: H < 10 ? `0${H}` : H,
    m,
    mm: m < 10 ? `0${m}` : m,
    s,
    ss: s < 10 ? `0${s}` : s,
  }
}

enum TimeType {
  Minute = 'minute',
  Hour = 'hour',
  Day = 'day',
  Month = 'month',
  Year = 'year',
}
const TimeTypeDivider = {
  [TimeType.Minute]: ONE_MINUTE_IN_MS,
  [TimeType.Hour]: ONE_HOUR_IN_MS,
  [TimeType.Day]: ONE_DAY_IN_MS,
  [TimeType.Month]: ONE_MONTH_IN_MS,
}
export function dateDifferenceInWords(from: Date, to = new Date()): string {
  const diff = +to - +from
  if (diff < ONE_MINUTE_IN_MS) return `a few seconds ago`

  let amount = 0
  let timeType: TimeType

  if (diff < ONE_HOUR_IN_MS) timeType = TimeType.Minute
  else if (diff < ONE_DAY_IN_MS) timeType = TimeType.Hour
  else if (diff < ONE_MONTH_IN_MS) timeType = TimeType.Day
  else timeType = TimeType.Month

  amount = Math.floor(diff / TimeTypeDivider[timeType])

  if (timeType === TimeType.Month && amount > 11) {
    timeType = TimeType.Year
    amount = Math.floor(amount / 12)
  }

  if (amount > 1) (timeType as string) += 's'

  return `${amount} ${timeType} ago`
}

export function parseIntervalString(interval: string) {
  const amount = parseInt(interval, 10)
  return {
    amount,
    format: interval.slice(amount.toString().length),
  }
}

export function getTodaysEnd() {
  const date = new Date()
  date.setHours(23, 59, 59, 999)
  return date
}
