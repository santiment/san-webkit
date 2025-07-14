import type { RequestEvent } from '@sveltejs/kit'

import { BROWSER } from 'esm-env'

import { getCookie, setCookie } from '$lib/utils/cookies.js'
import { exactObjectKeys } from '$lib/utils/object.js'

const AB_KEY_TO_COOKIE_MAP = {
  insight_article_thumbnail: '_SB_AB_INS_THMBN',
} as const satisfies Record<string, string>

const AB_KEYS = exactObjectKeys(AB_KEY_TO_COOKIE_MAP)

export type ABKey = (typeof AB_KEYS)[number]
export type ABSettings = Record<ABKey, boolean>

export function setABCookies(settings: ABSettings) {
  if (!BROWSER) return

  AB_KEYS.map((key) => [AB_KEY_TO_COOKIE_MAP[key], settings[key]] as const).forEach(
    ([cookieKey, abValue]) => {
      const cookieValue = getCookie(cookieKey)
      if (cookieValue) return

      setCookie(cookieKey, abValue ? '+' : '-')
    },
  )
}

export const getABSettings = (event: RequestEvent) =>
  AB_KEYS.reduce((prev, key) => {
    const cookieValue = event.cookies.get(AB_KEY_TO_COOKIE_MAP[key])

    const abValue = cookieValue ? cookieValue === '+' : Math.random() < 0.5

    return { ...prev, [key]: abValue }
  }, {} as ABSettings)
