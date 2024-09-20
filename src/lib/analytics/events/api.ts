import { ApiMutation } from '$lib/api/index.js'
import { BROWSER } from 'esm-env'
import type { TEventData } from './track.js'

export const trackSanEvent = ApiMutation(
  (event_name: string, created_at: Date, metadata: TEventData) => ({
    schema: `
  mutation trackEvents($event: json, $anonymousUserId: String) {
    trackEvents(events: $event, anonymousUserId: $anonymousUserId)
  }
`,
    variables: {
      anonymousUserId: getDeviceId(),
      event: JSON.stringify([
        {
          event_name,
          metadata,
          created_at: created_at.toISOString(),
        },
      ]),
    },
  }),
)

function getDeviceId(): string | undefined {
  if (!BROWSER) return

  const cookies = document.cookie.split('; ')

  // NOTE: Searching for intercom's cookie with generated device id [@vanguard | 26 Jan, 2023]
  const cookie = cookies.find((cookie) => cookie.includes('device-id'))

  if (!cookie) return

  return cookie.split('=')[1]
}
