import { posthog } from 'posthog-js'
import { BROWSER } from 'esm-env'

export function initPosthog(id = 'phc_uehdF88phYxAqgTbYH5GHjM2dy2Us8AcI5r1zoIRLw9') {
  if (!BROWSER) return

  posthog.init(id, {
    api_host: '/api/track/posthog',
    ui_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
    enable_heatmaps: true,
    autocapture: true,
  })
}
