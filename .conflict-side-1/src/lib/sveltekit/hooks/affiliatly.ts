import { type Handle, type RequestEvent } from '@sveltejs/kit'

import { AFFILIATLY_PROXY_ROUTE, TRACKING_QUERY_KEYS } from '$lib/analytics/affiliatly/index.js'

const API_ENDPOINT = 'https://www.affiliatly.com/api_request.php'

export const AFFILIATLY_COOKIE_NAME = 'affiliatly_v3'
export const AFFILIATLY_PROGRAM_ID = 'AF-1074422'

const DEFAULT_COOKIE_MAX_AGE = 60 * 60 * 24 * 30

const UTM_KEYS = ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'] as const

const LEGACY_AFFILIATE_MAP: Record<string, string> = {
  twitter: '2',
}

function extractParams(url: URL, keys: readonly string[], prefix = '') {
  const result: Record<string, string> = {}

  for (const key of keys) {
    const value = url.searchParams.get(key)
    if (value) result[key.replace(prefix, '')] = value
  }

  return result
}

export async function callAffiliatly(payload: URLSearchParams) {
  const query = new URLSearchParams({ aid: AFFILIATLY_PROGRAM_ID, t: Date.now().toString() })
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 2000)

  return fetch(`${API_ENDPOINT}?${query}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload,
    signal: controller.signal,
  })
    .catch((error) => console.error(error))
    .finally(() => clearTimeout(timeout))
}

export function parseAffiliateCookie(cookieValue: string) {
  const params = new URLSearchParams(cookieValue)

  const idToken = params.get('id_token')
  const userId = params.get('id_user')
  const affiliateUserId = params.get('aff_uid') ?? ''

  return idToken && userId ? { idToken, userId, affiliateUserId } : null
}

async function serializeAffiliateCookie(
  response: Response | void,
  cookies: RequestEvent['cookies'],
) {
  if (!response?.ok) return null

  const rawData = await response.text()
  if (!rawData) return null

  const durationStr = new URLSearchParams(rawData).get('duration')
  const maxAge = parseInt(durationStr ?? String(DEFAULT_COOKIE_MAX_AGE), 10)

  return cookies.serialize(AFFILIATLY_COOKIE_NAME, rawData, {
    path: '/',
    maxAge,
    sameSite: 'lax',
    httpOnly: true,
  })
}

async function handleUserTracking({ url, cookies, request }: RequestEvent) {
  if (request.method !== 'POST') return new Response(null, { status: 405 })
  if (request.headers.get('origin') !== url.origin) return new Response(null, { status: 403 })

  if (cookies.get(AFFILIATLY_COOKIE_NAME) !== undefined) {
    return new Response(null, { status: 204 })
  }

  const affiliateParams = extractParams(url, TRACKING_QUERY_KEYS)
  const fpr = url.searchParams.get('fpr')

  if (fpr && LEGACY_AFFILIATE_MAP[fpr] && !affiliateParams.aff) {
    affiliateParams.aff = LEGACY_AFFILIATE_MAP[fpr]
  }

  if (affiliateParams['coupon-code']) {
    affiliateParams.couponcode = affiliateParams['coupon-code']
    delete affiliateParams['coupon-code']
  }

  if (Object.keys(affiliateParams).length === 0) {
    return new Response(null, { status: 204 })
  }

  const payload = new URLSearchParams({
    mode: 'track-v3',
    id_affiliatly: AFFILIATLY_PROGRAM_ID,
    referer: request.headers.get('referer') ?? '',
    tracking_parameter: JSON.stringify({ get: affiliateParams, hash: {} }),
    utm_parameters: JSON.stringify(extractParams(url, UTM_KEYS, 'utm_')),
  })

  if (url.searchParams.has('qr')) payload.append('qr', '1')

  const response = await callAffiliatly(payload)
  const setCookie = await serializeAffiliateCookie(response, cookies)

  return new Response('ok', {
    status: 200,
    headers: setCookie ? { 'Set-Cookie': setCookie } : {},
  })
}

async function handleConversionTracking({ url, cookies, request }: RequestEvent) {
  if (request.method !== 'POST') return new Response(null, { status: 405 })
  if (request.headers.get('origin') !== url.origin) return new Response(null, { status: 403 })

  const cookieValue = cookies.get(AFFILIATLY_COOKIE_NAME)
  const session = cookieValue ? parseAffiliateCookie(cookieValue) : null

  if (!session) return new Response(null, { status: 204 })

  const formData = new URLSearchParams(await request.text())

  await callAffiliatly(
    new URLSearchParams({
      mode: 'mark',
      id_affiliatly: AFFILIATLY_PROGRAM_ID,
      id_user: session.userId,
      id_hash: session.idToken,
      aff_uid: session.affiliateUserId,
      order: formData.get('order') ?? '',
      price: formData.get('price') ?? '',
      coupon_code: formData.get('coupon_code') ?? '',
      client_email: formData.get('client_email') ?? '',
    }),
  )

  return new Response('ok', { status: 200 })
}

export const affiliatlyTrackHandle: Handle = ({ event, resolve }) => {
  switch (event.url.pathname) {
    case `${AFFILIATLY_PROXY_ROUTE}/user`:
      return handleUserTracking(event)
    case `${AFFILIATLY_PROXY_ROUTE}/conversion`:
      return handleConversionTracking(event)
    default:
      return resolve(event)
  }
}
