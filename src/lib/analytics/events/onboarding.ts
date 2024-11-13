import { TrackCategory } from './utils.js'

const track = TrackCategory('Onboarding')

export const trackGdprAccept = (accepted: boolean) =>
  track('gdpr_accept', { accepted, source_url: window.location.href })
