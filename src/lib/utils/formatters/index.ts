export function DEFAULT_FORMATTER(value: number) {
  if (value === undefined || value === null) {
    return 'Invalid data'
  }

  const absValue = Math.abs(value)
  //if (absValue > 99999) {
  //  return millify(value, 3)
  //}

  if (absValue < 0.000001) {
    return +value.toFixed(10)
  }

  return +value.toFixed(2)
}

const decimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const smallDecimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
})

function getDecimalFormatter(value: number) {
  if (value < 0.000001) {
    return new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: 10,
    })
  }

  if (value < 2) return smallDecimalFormatter

  return decimalFormatter
}

export function createDecimalFormatter(unit: string) {
  return (value: number) => {
    if (!Number.isFinite(+value)) {
      return 'Invalid data'
    }

    const absValue = Math.abs(value)
    const formatted = getDecimalFormatter(absValue).format(absValue)
    const sign = absValue !== value ? '-' : ''

    return sign + unit + formatted
  }
}

export const usdFormatter = createDecimalFormatter('$')

export function percentFormatter(value: number) {
  if (value === undefined || value === null) {
    return 'Invalid data'
  }

  const absValue = Math.abs(+value)

  if (absValue < 0.01) {
    return +value.toFixed(6) + '%'
  }

  return +value.toFixed(2) + '%'
}

export function calculatePercentageChange(firstValue: number, lastValue: number) {
  const percent = ((lastValue - firstValue) / firstValue) * 100

  if (!Number.isFinite(percent)) {
    return ''
  }

  const sign = percent >= 0 ? '+' : ''

  return sign + percent.toFixed(2) + '%'
}
