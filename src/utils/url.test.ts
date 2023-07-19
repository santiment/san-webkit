import { describe, expect, it } from 'vitest'
import { getSEOLinkFromIdAndTitle, parse } from './url'

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

describe('parse - search params - key=value', () => {
  it('[1;key]={json:true}', () => {
    const key = '[1;key]'
    const value = { json: true }
    const searchQuery = `?${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`

    expect(parse(searchQuery)).toEqual({
      [key]: JSON.stringify(value),
    })
  })

  it('auth=google', () => {
    const key = 'auth'
    const value = 'google'
    const searchQuery = `?${encodeURIComponent(key)}=${encodeURIComponent(value)}`

    expect(parse(searchQuery)).toEqual({
      [key]: value,
    })
  })
})
