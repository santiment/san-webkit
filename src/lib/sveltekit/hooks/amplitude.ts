import { error, json, type Handle } from '@sveltejs/kit'

export const amplitudeTrackHandle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname !== '/api/track') {
    return resolve(event)
  }

  const headers = event.request.headers
  headers.delete('content-length')
  // headers.delete(':method')
  // headers.delete(':authority')
  // headers.delete(':scheme')
  // headers.delete(':path')
  headers.delete('pragma')
  headers.delete('cache-control')

  // headers.set('host', 'api2.amplitude.com')

  try {
    const body = await event.request.json()

    const result = await fetch('https://api2.amplitude.com/2/httpapi', {
      method: 'POST',
      headers,
      body: JSON.stringify(body), //: event.request.body,
    })

    const data = await result.json()

    return json(data)
  } catch (e) {
    console.error(e)

    return error(500, 'Internal Server Error')
  }
}
