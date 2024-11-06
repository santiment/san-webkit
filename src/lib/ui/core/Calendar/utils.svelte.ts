import type { DateValue } from '@internationalized/date'

export const createPlaceholder = (getDefault: () => DateValue) => {
  let placeholderState = $state<DateValue | undefined>()

  const placeholder = {
    get date() {
      return placeholderState ?? getDefault()
    },
    set date(val: DateValue) {
      placeholderState = val
    },
  }

  return placeholder
}

const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' })
export const formatMonth = (month: number) => monthFormatter.format(new Date(0, month - 1, 1))
