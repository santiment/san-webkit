import type { Tracker } from './track.js'

import { deleteSavedValue, getSavedJson, saveJson } from '$lib/utils/localStorage/index.js'

import { trackEvent } from './index.js'

export type TLoginType = 'email' | 'google' | 'twitter' | 'metamask' | 'wallet'

const LOGIN_METHOD = 'LOGIN_METHOD'
export function saveLoginMethod(method: TLoginType) {
  return saveJson(LOGIN_METHOD, { method, timestamp: Date.now() })
}
export function getSavedLoginMethod() {
  const value = getSavedJson<{ method: TLoginType; timestamp: number }>(LOGIN_METHOD)
  deleteSavedValue(LOGIN_METHOD)
  return value
}

export function trackAuthStart(method: TLoginType) {
  const date = new Date()
  saveLoginMethod(method)

  return trackEvent('auth_start', {
    method,

    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,

    source_url: window.location.href,
    source_search_params: window.location.search,
    referrer: document.referrer,
  })
}

export function trackAuthFinish(method: TLoginType, isNewUserSignup: boolean) {
  const date = new Date()

  return trackEvent('auth_finish', {
    method,
    is_new_user_signup: isNewUserSignup,

    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,

    source_url: window.location.href,
    source_search_params: window.location.search,
    referrer: document.referrer,
  })
}

export function trackLoginStart(method: TLoginType) {
  const date = new Date()
  saveLoginMethod(method)

  return trackEvent('login_start', {
    method,
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,
    source_url: window.location.href,
  })
}

export const trackLoginFinish = (method: TLoginType) => trackEvent('login_finish', { method })

export function trackSignupStart(method: TLoginType) {
  saveLoginMethod(method)
  return trackEvent('signup_start', {
    method,
    source_url: window.location.href,
  })
}

export const trackSignupFinish = (method: TLoginType, trackers?: Tracker[]) =>
  trackEvent('signup_finish', { method }, trackers)

export function trackAuth(method: TLoginType, isSignUp?: boolean) {
  trackAuthStart(method)

  if (isSignUp) {
    trackSignupStart(method)
  } else {
    trackLoginStart(method)
  }
}
