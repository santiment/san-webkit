import { posthog } from 'posthog-js'
import { BROWSER } from 'esm-env'

import { Tracker, track } from '../events/track.js'

export const POSTHOG_URL = 'https://eu.i.posthog.com'
export const PROXY_ROUTE = '/api/track/posthog'

export function initPosthog(id = 'phc_uehdF88phYxAqgTbYH5GHjM2dy2Us8AcI5r1zoIRLw9') {
  if (!BROWSER) return
  if (process.env.IS_LOGGING_ENABLED) return

  posthog.init(id, {
    api_host: PROXY_ROUTE,
    ui_host: POSTHOG_URL,
    person_profiles: 'identified_only',
    enable_heatmaps: true,
    autocapture: true,
  })

  // NOTE: The bridge for legacy events
  if (!window.__trackLegacyWebkitEvent) {
    window.__trackLegacyWebkitEvent = (eventName: string, data: any) => {
      track.event(eventName, data, [Tracker.POSTHOG])
    }
  }
}

export { usePosthogFlow } from './flow.svelte.js'
