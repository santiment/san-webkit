import { describe, expect, it } from 'vitest'

import { millify } from './millify.js'

describe('millify', () => {
  it('zero', () => expect(millify(0)).toEqual('0'))

  it('zero float', () => expect(millify(0.0)).toEqual('0'))

  it('scientific notation', () => expect(millify(4.1e-16)).toEqual('0'))

  it('hundreds', () => expect(millify(100)).toEqual('100'))

  it('thousands', () => expect(millify(1000)).toEqual('1K'))

  it('millions', () => expect(millify(1000000)).toEqual('1M'))

  it('billions', () => expect(millify(1000000000)).toEqual('1B'))

  it('trillions', () => expect(millify(1000000000000)).toEqual('1T'))

  it('bigger than trillions', () => expect(millify(10000000000000000)).toEqual('10000T'))

  it('negative thousands', () => expect(millify(-2000)).toEqual('-2K'))

  it('0 digits precision', () => expect(millify(3333, 0)).toEqual('3K'))

  it('1 digit precision without zeroes', () => expect(millify(2500)).toEqual('2.5K'))

  it('2 digits precision without zeroes', () => expect(millify(1201, 2)).toEqual('1.2K'))

  it('3 digits precision', () => expect(millify(3333, 3)).toEqual('3.333K'))
})

describe('millify negatives', () => {
  it('zero float', () => expect(millify(-0.0)).toEqual('0'))

  it('hundreds', () => expect(millify(-100)).toEqual('-100'))

  it('thousands', () => expect(millify(-1000)).toEqual('-1K'))

  it('millions', () => expect(millify(-1000000)).toEqual('-1M'))

  it('billions', () => expect(millify(-1000000000)).toEqual('-1B'))

  it('trillions', () => expect(millify(-1000000000000)).toEqual('-1T'))

  it('bigger than trillions', () => expect(millify(-10000000000000000)).toEqual('-10000T'))

  it('negative thousands', () => expect(millify(-2000)).toEqual('-2K'))

  it('0 digits precision', () => expect(millify(-3333, 0)).toEqual('-3K'))

  it('1 digit precision without zeroes', () => expect(millify(-2500)).toEqual('-2.5K'))

  it('2 digits precision without zeroes', () => expect(millify(-1201, 2)).toEqual('-1.2K'))

  it('3 digits precision', () => expect(millify(-3333, 3)).toEqual('-3.333K'))
})

describe('millify small values - first six values', () => {
  it('0.123456789', () => expect(millify(0.123456789)).toEqual('0.123457'))

  it('1.123456789', () => expect(millify(1.123456789)).toEqual('1.123457'))

  it('-1.123456789', () => expect(millify(-1.123456789)).toEqual('-1.123457'))
})
