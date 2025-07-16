export function percentChange(oldValue: number, newValue: number) {
  const change = (100 * (newValue - oldValue)) / oldValue

  return formatPercentChange(change)
}

export function formatPercentChange(value: number) {
  return +value.toFixed(Math.abs(value) < 1 ? 4 : 2)
}
