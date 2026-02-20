import type { RequestEvent } from '@sveltejs/kit'

import { BROWSER } from 'esm-env'

import { getCookie, setCookie } from '$lib/utils/cookies.js'

const NIGHT_MODE_COOKIE_KEY = '_SB_NM'

export const getNightModeFromCookies = (event?: RequestEvent) => {
  const nmCookie = event
    ? event.cookies.get(NIGHT_MODE_COOKIE_KEY)
    : BROWSER
      ? getCookie(NIGHT_MODE_COOKIE_KEY)
      : null

  if (!nmCookie) return null

  return nmCookie === '+'
}

export const saveNightModeCookie = (isNightMode: boolean) => {
  setCookie(NIGHT_MODE_COOKIE_KEY, isNightMode ? '+' : '-')
}
