import { error, redirect, type Handle, type RequestEvent } from '@sveltejs/kit'
import UAParser from 'ua-parser-js'

import { loadCustomerData, type TCustomer } from '$lib/ctx/customer/api.js'
import { DeviceType } from '$lib/ctx/device/index.svelte.js'
import { logger } from '$lib/logger/index.js'

function normalizeDeviceType(type: string | undefined): DeviceType {
  switch (type) {
    case 'mobile':
      return DeviceType.Phone
    case 'tablet':
      return DeviceType.Tablet
    default:
      return DeviceType.Desktop
  }
}

export const checkIsSanbaseCookiePresent = (event: RequestEvent) =>
  event.cookies.get('_sanbase_sid') || event.cookies.get('_sanbase_stage_sid')

export const appSessionHandle: Handle = async ({ event, resolve }) => {
  let customer = {} as TCustomer | undefined

  // NOTE: Only making a currentUser request if the sanbase cookie is present
  if (checkIsSanbaseCookiePresent(event)) {
    // @ts-expect-error
    await loadCustomerData(event.fetch, (data) => Object.assign(customer, data)).catch(() => {
      console.log('loadCustomerData error')
      customer = undefined
    })
  }

  const theme = customer?.currentUser?.settings.theme === 'nightmode' ? 'night-mode' : ''
  const userAgent = UAParser(event.request.headers.get('user-agent') as any)
  const device = normalizeDeviceType(userAgent.device.type)

  event.locals.device = device
  event.locals.customer = customer
  event.locals.theme = theme

  let response: Response
  try {
    response = await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%body-class%', `${device} ${theme}`),
    })
  } catch (e) {
    logger.info(e, event.url.pathname)

    return error(500, 'Internal server error')
  }

  Object.entries({
    'Content-Security-Policy': "frame-ancestors 'self'",
    'X-Frame-Options': 'sameorigin',
  }).forEach(([header, value]) => response.headers.set(header, value))

  return response
}

export const normalizePathHandle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url

  logger.info('normalizePathHandle: ' + pathname)

  if (pathname.endsWith('//')) {
    return redirect(308, pathname.replace(/\/+$/, '/') + event.url.search)
  }

  return resolve(event)
}

export { amplitudeTrackHandle } from './amplitude.js'

export { sanbaseVersionHandle } from './sanbase.js'

export { cookiePolicyHandle } from './cookie.js'

export { posthogTrackHandle } from './posthog.js'
