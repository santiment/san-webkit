import { describe, expect, test } from 'vitest'

import { SanFormulas, Timeseries } from './index.js'

const range = (length: number) => Array.from({ length }, (_, i) => i + 1)

const m1 = new Timeseries([4, 7, 2, 9, 5, 1, 8, 3, 6, 10, 2, 7, 4, 11, 5], range(15))
const m2 = new Timeseries([3, -2, 12, 0, 6, -5, 9, 1, 8, 2], range(10))

const evaluate = (expr: string) => SanFormulas.evaluate(expr, { m1, m2 })
const values = (expr: string) => evaluate(expr).values

describe('max / min', () => {
  test('reduce numbers and timeseries values into a number', () => {
    expect(evaluate('max(m1)')).toBe(11)
    expect(evaluate('max(m1, m2, 0)')).toBe(12)
    expect(evaluate('max(3, 7)')).toBe(7)
    expect(evaluate('min(m1)')).toBe(1)
    expect(evaluate('min(m1, m2)')).toBe(-5)
  })
})

describe('rolling window', () => {
  test('rolmax', () => {
    expect(values('rolmax(m1, 3)')).toEqual([4, 7, 7, 9, 9, 9, 8, 8, 8, 10, 10, 10, 7, 11, 11])
    expect(values('rolmax(m1)')).toEqual([4, 7, 7, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11])
  })

  test('rolmin', () => {
    expect(values('rolmin(m1, 3)')).toEqual([4, 4, 2, 2, 2, 1, 1, 1, 3, 3, 2, 2, 2, 4, 4])
    expect(values('rolmin(m1)')).toEqual([4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  })

  test('sum', () => {
    expect(values('sum(m1, 3)')).toEqual([
      4, 11, 13, 18, 16, 15, 14, 12, 17, 19, 18, 19, 13, 22, 20,
    ])
    expect(() => evaluate('sum(m1)')).toThrow()
  })

  test.each(['rolmax(m1, 1)', 'rolmin(m1, 0)', 'sum(m1, -3)', 'product(m1, 1.9)'])(
    'invalid period throws: %s',
    (expr) => expect(() => evaluate(expr)).toThrow('Period must be at least 2'),
  )

  test('fractional period is floored', () => {
    expect(values('sum(m1, 3.7)')).toEqual(values('sum(m1, 3)'))
    expect(values('rolmax(m1, 2.5)')).toEqual(values('rolmax(m1, 2)'))
  })

  test('period longer than timeseries covers all previous values', () => {
    expect(values('sum(m2, 20)')).toEqual([3, 1, 13, 13, 19, 14, 23, 24, 32, 34])
  })

  test('product', () => {
    expect(values('product(m1, 3)')).toEqual([
      4, 28, 56, 126, 90, 45, 40, 24, 144, 180, 120, 140, 56, 308, 220,
    ])
    expect(() => evaluate('product(m1)')).toThrow()
  })

  test('keeps timestamps', () => {
    expect(evaluate('sum(m1, 3)').timestamps).toEqual(m1.timestamps)
  })
})

describe('percent_change', () => {
  test('relative change, first period points skipped', () => {
    const result = evaluate('percent_change(m1, 2)')
    const expected = [-0.5, 2 / 7, 1.5, -8 / 9, 0.6, 2, -0.25, 7 / 3, -2 / 3, -0.3, 1, 4 / 7, 0.25]

    expect(result.values).toHaveLength(expected.length)
    expected.forEach((value, i) => expect(result.values[i]).toBeCloseTo(value))
    expect(result.timestamps).toEqual(range(15).slice(2))
  })

  test('period below 1 throws', () => {
    expect(() => evaluate('percent_change(m1, 0)')).toThrow('`1` or larger')
  })
})
