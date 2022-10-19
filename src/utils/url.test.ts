import { getSEOLinkFromIdAndTitle } from './url'

describe('getSEOLinkFromIdAndTitle', () => {
  const test = (title, expected) =>
    it(title, () => expect(getSEOLinkFromIdAndTitle(0, title)).toEqual(expected + '-0'))

  test(' spaces test ', 'spaces-test')

  test(' number 1 2 3 test ', 'number-1-2-3-test')

  test(
    " special symboles _ = ; ] [ \\ / . , < > | ` ` ~ ! @ # $ % ^ & * ( ) { } ' \t \n ",
    'special-symboles',
  )

  test(' 😀😀 emojis test 😀😀 😀😀', 'emojis-test')
})
