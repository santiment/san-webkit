import { type Handle } from '@sveltejs/kit'
import UAParser from 'ua-parser-js'

import { loadCustomerData, type TCustomer } from '$lib/ctx/customer/api.js'
import { DeviceType } from '$lib/ctx/device/index.svelte.js'

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
export const appSessionHandle: Handle = async ({ event, resolve }) => {
  let customer = {} as TCustomer | undefined
  // @ts-expect-error
  await loadCustomerData(event.fetch, (data) => Object.assign(customer, data)).catch(() => {
    console.log('loadCustomerData error')
    customer = undefined
  })

  const theme = customer?.currentUser?.settings.theme === 'nightmode' ? 'night-mode' : ''
  const userAgent = UAParser(event.request.headers.get('user-agent') as any)
  const device = normalizeDeviceType(userAgent.device.type)

  event.locals.device = device
  event.locals.customer = customer
  event.locals.theme = theme

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%body-class%', `${device} ${theme}`),
  })

  Object.entries({
    'Content-Security-Policy': "frame-ancestors 'self'",
    'X-Frame-Options': 'sameorigin',
  }).forEach(([header, value]) => response.headers.set(header, value))

  return response
}

export { amplitudeTrackHandle } from './amplitude.js'

export { sanbaseVersionHandle } from './sanbase.js'

export { cookiePolicyHandle } from './cookie.js'
