export function DEFAULT_FORMATTER(value: number) {
  if (value === undefined || value === null) {
    return 'Invalid data'
  }

  const absValue = Math.abs(value)

  if (absValue < 0.000001) {
    return +value.toFixed(10)
  }

  return +value.toFixed(2)
}
