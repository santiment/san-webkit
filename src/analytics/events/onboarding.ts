import { TrackCategory } from './utils'

const track = TrackCategory('Onboarding')

export const trackSignupStart = (type: string) =>
  track('signup_start', {
    type, //wallet, email
  })

export const trackSignupFinish = () => track('signup_finish')

export const trackGdprAccept = (gdpr_accept: boolean) => track('gdpr_accept', { gdpr_accept })
