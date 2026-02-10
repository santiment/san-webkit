import type { TEventData } from './track.js'

import { BROWSER } from 'esm-env'

import { ApiMutation } from '$lib/api/index.js'
import { getCookie, setCookie } from '$lib/utils/cookies.js'
import { uuidv7 } from '$lib/utils/uuid/index.js'

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

const SAN_COOKIE = 'san-track-id'
function getDeviceId(): string | undefined {
  if (!BROWSER) return

  // NOTE: Searching for intercom's cookie with generated device id [@vanguard | 26 Jan, 2023]
  const intercomDeviceId = getCookie('device-id', (cookie: string) => cookie.includes('device-id'))
  if (intercomDeviceId) {
    return intercomDeviceId
  }

  return getCookie(SAN_COOKIE) || setCookie(SAN_COOKIE, uuidv7())
}
