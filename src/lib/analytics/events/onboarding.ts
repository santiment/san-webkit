import { trackEvent } from './index.js'

export const trackGdprAccept = (accepted: boolean) =>
  trackEvent('gdpr_accept', {
    accepted,
  })
