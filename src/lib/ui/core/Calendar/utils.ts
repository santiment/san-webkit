import { CalendarDate } from '@internationalized/date'

export function calendarDateFromDate(date: Date) {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}
