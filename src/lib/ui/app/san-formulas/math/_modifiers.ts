import type { UTCTimestamp } from '@santiment-network/chart-next'

import { math, Timeseries } from './core.js'
import { MathOperators } from './_operators.js'

const shift = math.typed('shift', {
  'Timeseries, number': (timeseries: Timeseries, period: number) => {
    const { values, timestamps } = timeseries

    if (!values.length || !Number.isFinite(period)) {
      return timeseries
    }

    const absDiff = timestamps[Math.abs(period)] - timestamps[0]
    const diff = period < 0 ? -absDiff : absDiff

    return new Timeseries(
      values,
      timestamps.map((timestamp) => timestamp + diff),
    )
  },
}) as (timeseries: Timeseries, period: number) => Timeseries

const diff = math.typed('diff', {
  'Timeseries, number': (timeseries: Timeseries, period: number) => {
    const { values, timestamps } = timeseries

    if (!values.length || !Number.isFinite(period)) {
      return timeseries
    }

    // NOTE: minus => left diff (prev point), plus => right diff (next point)
    period = -period

    const diffedValues = values.map((value, i) => {
      const target = values[i - period]
      return Number.isFinite(target) ? value - target : undefined
    })

    const slicePeriod = (data: number[]): number[] =>
      period < 0 ? data.slice(0, period) : data.slice(period)

    return new Timeseries(slicePeriod(diffedValues as number[]), slicePeriod(timestamps))
  },
}) as (timeseries: Timeseries, period: number) => Timeseries

const cumprod = math.typed('cumprod', {
  Timeseries: (timeseries: Timeseries) => {
    const { values, timestamps } = timeseries

    let product = 1

    return new Timeseries(
      values.map((value) => (product *= value)),
      timestamps,
    )
  },
}) as (timeseries: Timeseries) => Timeseries

const cumsum = math.typed('cumsum', {
  Timeseries: (timeseries: Timeseries) => {
    const { values, timestamps } = timeseries

    let sum = 0

    return new Timeseries(
      values.map((value) => (sum += value)),
      timestamps,
    )
  },
}) as (timeseries: Timeseries) => Timeseries

const value_at = math.typed('value_at', {
  'Timeseries, number': (
    timeseries: Timeseries,
    startTimestamp: UTCTimestamp = 0 as UTCTimestamp,
  ) => {
    const { values, timestamps } = timeseries

    return values.find((_, i) => {
      if (timestamps[i] >= startTimestamp) {
        return true
      }
    })
  },
}) as (timeseries: Timeseries, startTimestamp?: UTCTimestamp) => number

const percent_change = math.typed('percent_change', {
  'Timeseries, number': (timeseries: Timeseries, period: number) => {
    const { values, timestamps } = timeseries

    if (!values.length || !Number.isInteger(period)) {
      return timeseries
    }

    if (period < 1) {
      throw new Error('percent_change period should be `1` or larger')
    }

    return new Timeseries(
      values.slice(period).map((value, i) => value / values[i] - 1),
      timestamps.slice(period),
    )
  },
}) as (timeseries: Timeseries, period: number) => Timeseries

const rolmax = createRollingWindowFunction('rolmax', (a, b) => (a > b ? a : b), {
  initial: -Infinity,
})
const rolmin = createRollingWindowFunction('rolmin', (a, b) => (a < b ? a : b), {
  initial: Infinity,
})
const sum = createRollingWindowFunction('sum', (a, b) => a + b, {
  initial: 0,
  isPeriodRequired: true,
})
const product = createRollingWindowFunction('product', (a, b) => a * b, {
  initial: 1,
  isPeriodRequired: true,
})
// Any non-zero value is treated as a satisfied condition (same as `if`)
const count = createRollingWindowFunction('count', (acc, value) => acc + (value ? 1 : 0), {
  initial: 0,
  isPeriodRequired: true,
})

const rank = math.typed('rank', {
  Timeseries: (timeseries: Timeseries) => {
    const { values, timestamps } = timeseries
    const lastIndex = values.length - 1

    // Position of a value's first occurrence in the sorted list === number of strictly smaller values
    const smallerCount = new Map<number, number>()
    values
      .slice()
      .sort((a, b) => a - b)
      .forEach((value, i) => smallerCount.has(value) || smallerCount.set(value, i))

    return new Timeseries(
      values.map((value) => (lastIndex > 0 ? smallerCount.get(value)! / lastIndex : 0)),
      timestamps,
    )
  },
}) as (timeseries: Timeseries) => Timeseries

const scale = math.typed('scale', {
  Timeseries: (timeseries: Timeseries) => {
    const { values, timestamps } = timeseries
    const min = MathOperators.min(timeseries)
    const range = MathOperators.max(timeseries) - min

    return new Timeseries(
      values.map((value) => (range ? (2 * (value - min)) / range - 1 : 0)),
      timestamps,
    )
  },
}) as (timeseries: Timeseries) => Timeseries

export const MathModifiers = {
  shift,

  diff,
  percent_change,

  cumprod,
  cumsum,

  rolmax,
  rolmin,
  sum,
  product,
  count,

  rank,
  scale,

  value_at,
}

// Reduces a trailing window of `period` values at each point.
// Without a period, window covers all values up to the current point.
function createRollingWindowFunction<GName extends string>(
  name: GName,
  reducer: (acc: number, value: number) => number,
  { initial, isPeriodRequired = false }: { initial: number; isPeriodRequired?: boolean },
) {
  const apply = (timeseries: Timeseries, period?: number) => {
    if (period !== undefined) {
      // Fractional periods are floored. Period of 1 leaves data unchanged, smaller is meaningless
      if (period < 2) {
        throw new Error(`Invalid ${name} period: ${period}. Period must be at least 2`)
      }

      period = Math.floor(period)
    }

    const { values, timestamps } = timeseries
    const result = new Array<number>(values.length)

    // Plain loops instead of slice + reduce: no per-point window allocation
    for (let i = 0; i < values.length; i++) {
      let acc = initial

      for (let j = period ? Math.max(0, i - period + 1) : 0; j <= i; j++) {
        acc = reducer(acc, values[j])
      }

      result[i] = acc
    }

    return new Timeseries(result, timestamps)
  }

  return math.typed(name, {
    'Timeseries, number': apply,
    ...(isPeriodRequired ? {} : { Timeseries: apply }),
  }) as (timeseries: Timeseries, period?: number) => Timeseries
}
