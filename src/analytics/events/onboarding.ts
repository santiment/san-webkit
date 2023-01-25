import type { Tracker } from '../index'
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

export const trackSignupFinish = (method: LoginType, trackers?: Tracker[]) =>
  track('signup_finish', { method }, trackers)

export const trackGdprAccept = (accepted: boolean) =>
  track('gdpr_accept', { accepted, source_url: window.location.href })
