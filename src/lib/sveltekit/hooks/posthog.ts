import { error, json, text, type Handle } from '@sveltejs/kit'

const POSTHOG_URL = 'https://eu.i.posthog.com'
const PROXY_ROUTE = '/api/track/ingest'

export const posthogTrackHandle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith(PROXY_ROUTE)) {
    const route = event.url.pathname.replace(PROXY_ROUTE, '')
    const targetUrl = `${POSTHOG_URL}/${route}${event.url.search}`

    const clonedRequest = event.request.clone()

    try {
      const options: RequestInit = {
        method: clonedRequest.method,
        headers: clonedRequest.headers,
      }

      if (clonedRequest.method !== 'GET' && clonedRequest.method !== 'HEAD') {
        options.body = clonedRequest.body
        ;(options as any).duplex = 'half'
      }

      const res = await fetch(targetUrl, options)

      if (clonedRequest.method === 'GET' || clonedRequest.method === 'HEAD') {
        const responseText = await res.text()
        return text(responseText, { status: res.status })
      } else {
        const responseJson = await res.json()
        return json(responseJson, { status: res.status })
      }
    } catch (e) {
      console.error(e)
      return error(500, 'Internal server error')
    }
  }

  return resolve(event)
}
