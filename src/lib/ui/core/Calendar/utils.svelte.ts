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
