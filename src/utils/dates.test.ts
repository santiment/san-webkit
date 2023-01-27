import { dateDifferenceInWords } from './dates'

describe('dateDifferenceInWords ', () => {
  const isoTo = '2021-05-11T10:44:38.081Z'
  const getDiff = (from: string) => dateDifferenceInWords(new Date(from), new Date(isoTo))

  it('a few seconds ago', () =>
    expect(getDiff('2021-05-11T10:44:38.081Z')).toEqual('a few seconds ago'))

  it('1 minute ago', () => expect(getDiff('2021-05-11T10:43:38.081Z')).toEqual('1 minute ago'))

  it('5 minutes ago', () => expect(getDiff('2021-05-11T10:39:38.081Z')).toEqual('5 minutes ago'))

  it('1 hour ago', () => expect(getDiff('2021-05-11T09:44:38.081Z')).toEqual('1 hour ago'))

  it('3 hours ago', () => expect(getDiff('2021-05-11T07:44:38.081Z')).toEqual('3 hours ago'))

  it('1 day ago', () => expect(getDiff('2021-05-10T10:44:38.081Z')).toEqual('1 day ago'))

  it('3 days ago', () => expect(getDiff('2021-05-08T10:44:38.081Z')).toEqual('3 days ago'))

  it('1 month ago', () => expect(getDiff('2021-04-11T10:44:38.081Z')).toEqual('1 month ago'))

  it('3 months ago', () => expect(getDiff('2021-02-11T10:44:38.081Z')).toEqual('3 months ago'))

  it('1 year ago', () => expect(getDiff('2020-05-11T10:44:38.081Z')).toEqual('1 year ago'))

  it('3 years ago', () => expect(getDiff('2018-05-11T10:44:38.081Z')).toEqual('3 years ago'))
})
