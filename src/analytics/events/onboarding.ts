import type { LoginType } from './general'
import { TrackCategory } from './utils'

const track = TrackCategory('Onboarding')

export const trackSignupStart = (type: LoginType) =>
  track('signup_start', {
    type, //wallet, email
  })

export const trackSignupFinish = () => track('signup_finish')

export const trackGdprAccept = (accepted: boolean) => track('gdpr_accept', { accepted })
