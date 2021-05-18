import { millify } from './formatting'

describe('millify', () => {
  it('zero', () => expect(millify(0)).toEqual('0'))

  it('zero float', () => expect(millify(0.0)).toEqual('0'))

  it('scientific notation', () => expect(millify(4.1e-16)).toEqual('0'))

  it('hundreds', () => expect(millify(100)).toEqual('100'))

  it('thousands', () => expect(millify(1000)).toEqual('1K'))

  it('millions', () => expect(millify(1000000)).toEqual('1M'))

  it('billions', () => expect(millify(1000000000)).toEqual('1B'))

  it('trillions', () => expect(millify(1000000000000)).toEqual('1T'))

  it('bigger than trillions', () =>
    expect(millify(10000000000000000)).toEqual('10000T'))

  it('negative thousands', () => expect(millify(-2000)).toEqual('-2K'))

  it('1 digit precision without zeroes', () =>
    expect(millify(2500)).toEqual('2.5K'))

  it('2 digits precision without zeroes', () =>
    expect(millify(1201, 2)).toEqual('1.2K'))

  it('3 digits precision', () => expect(millify(3333, 3)).toEqual('3.333K'))
})
