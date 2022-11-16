import type { LoginType } from './general'

import { saveLoginMethod, TrackCategory } from './utils'

const track = TrackCategory('Onboarding')

export function trackSignupStart(method: LoginType) {
  saveLoginMethod(method)
  return track('signup_start', {
    method, //wallet, email
    source_url: window.location.href,
  })
}

export const trackSignupFinish = (method: LoginType) => track('signup_finish', { method })

export const trackGdprAccept = (accepted: boolean) =>
  track('gdpr_accept', { accepted, source_url: window.location.href })
