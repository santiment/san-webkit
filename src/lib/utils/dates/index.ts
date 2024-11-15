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
export const calculateDaysTo = (target: string, start = Date.now()): number =>
  Math.ceil((Date.parse(target) - start) / ONE_DAY_IN_MS)

export function setDayEnd(date: Date) {
  date.setHours(23, 59, 59)
  return date
}

export function setDayStart(date: Date) {
  date.setHours(0, 0, 1)
  return date
}

export const getTodaysEnd = () => setDayEnd(new Date())

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

export function modifyDate(date: Date, modifier: { days: number }) {
  date.setDate(date.getDate() + modifier.days)
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