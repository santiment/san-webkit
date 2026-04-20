import { type Handle, type RequestEvent } from '@sveltejs/kit'

import { AFFILIATLY_PROXY_ROUTE } from '$lib/analytics/affiliatly/index.js'

const API_ENDPOINT = 'https://www.affiliatly.com/api_request.php'
const COOKIE_NAME = 'affiliatly_v3'
const PROGRAM_ID = 'AF-1074422'

const DEFAULT_COOKIE_MAX_AGE = 60 * 60 * 24 * 30

const TRACKING_QUERY_KEYS = [
  'aff',
  'fid',
  'ref',
  'air',
  'rfsn',
  'aa',
  'tr',
  'abc',
  'coupon-code',
  'hair',
] as const

const UTM_KEYS = ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'] as const

function extractParams(url: URL, keys: readonly string[], prefix = '') {
  const result: Record<string, string> = {}

  for (const key of keys) {
    const value = url.searchParams.get(key)
    if (value) result[key.replace(prefix, '')] = value
  }

  return result
}

async function callAffiliatly(payload: URLSearchParams) {
  const query = new URLSearchParams({ aid: PROGRAM_ID, t: Date.now().toString() })
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

function parseAffiliateCookie(cookieValue: string) {
  const params = new URLSearchParams(cookieValue)

  const idToken = params.get('id_token')
  const userId = params.get('id_user')
  const affiliateUserId = params.get('aff_uid') ?? ''

  return idToken && userId ? { idToken, userId, affiliateUserId } : null
}

async function handleConversionProxy(event: RequestEvent) {
  const cookieValue = event.cookies.get(COOKIE_NAME)
  const session = cookieValue ? parseAffiliateCookie(cookieValue) : null

  if (!session) return new Response(null, { status: 204 })

  const body = await event.request.text()
  const formData = new URLSearchParams(body)

  await callAffiliatly(
    new URLSearchParams({
      mode: 'mark',
      id_affiliatly: PROGRAM_ID,
      id_user: session.userId,
      id_hash: session.idToken,
      aff_uid: session.affiliateUserId,
      order: formData.get('order') ?? '',
      price: formData.get('price') ?? '',
      coupon_code: formData.get('coupon_code') ?? '',
      client_email: formData.get('client_email') ?? '',
    }),
  )

  return new Response(null, { status: 204 })
}

async function saveAffiliateCookie(response: Response | void, cookies: RequestEvent['cookies']) {
  if (!response?.ok) return

  const rawData = await response.text()
  if (!rawData) return

  const durationStr = new URLSearchParams(rawData).get('duration')
  const maxAge = parseInt(durationStr ?? String(DEFAULT_COOKIE_MAX_AGE), 10)

  cookies.set(COOKIE_NAME, rawData, {
    path: '/',
    maxAge,
    sameSite: 'lax',
    httpOnly: true,
  })
}

export const affiliatlyHandle: Handle = async ({ event, resolve }) => {
  const { url, cookies, request } = event

  if (url.pathname === AFFILIATLY_PROXY_ROUTE && request.method === 'POST') {
    return handleConversionProxy(event)
  }

  const affiliateParams = extractParams(url, TRACKING_QUERY_KEYS)

  if (affiliateParams['coupon-code']) {
    affiliateParams.couponcode = affiliateParams['coupon-code']
    delete affiliateParams['coupon-code']
  }

  const hasParams = Object.keys(affiliateParams).length > 0
  const hasCookie = cookies.get(COOKIE_NAME) !== undefined

  if (hasCookie || !hasParams) return resolve(event)

  const payload = new URLSearchParams({
    mode: 'track-v3',
    id_affiliatly: PROGRAM_ID,
    referer: request.headers.get('referer') ?? '',
    tracking_parameter: JSON.stringify({ get: affiliateParams, hash: {} }),
    utm_parameters: JSON.stringify(extractParams(url, UTM_KEYS, 'utm_')),
  })

  if (url.searchParams.has('qr')) payload.append('qr', '1')

  const response = await callAffiliatly(payload)
  await saveAffiliateCookie(response, cookies)

  return resolve(event)
}
