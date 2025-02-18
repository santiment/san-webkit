import { error, json, text, type Handle } from '@sveltejs/kit'

import { POSTHOG_URL, PROXY_ROUTE } from '$lib/analytics/posthog/index.js'

export const posthogTrackHandle: Handle = async ({ event, resolve }) => {
  if (!event.url.pathname.startsWith(PROXY_ROUTE)) {
    return resolve(event)
  }

  const route = event.url.pathname.replace(PROXY_ROUTE, '')
  const targetUrl = `${POSTHOG_URL}/${route}${event.url.search}`

  const { method, headers } = event.request

  let duplex = undefined

  if (method === 'POST') {
    duplex = 'half'
    headers.delete('content-length')
  }

  try {
    // @ts-expect-error duplex is not present in default Node.js types
    const response = await fetch(targetUrl, { method, headers, duplex, body: event.request.body })
    const isJson = (response.headers.get('content-type') ?? '').includes('application/json')

    const data = await (isJson ? response.json() : response.text())

    return (isJson ? json : text)(data, { status: response.status })
  } catch (e) {
    console.error(e)
    return error(500, 'Internal server error')
  }
}
