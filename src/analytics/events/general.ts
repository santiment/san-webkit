import { saveLoginMethod, TrackCategory } from './utils'

const track = TrackCategory('General')

export const trackAppOpen = () =>
  track('app_open', {
    source_url: window.location.href,
    referrer: document.referrer,
    source_search_params: window.location.search,
  })

export const trackAppClose = () =>
  track('app_close', {
    source_url: window.location.href,
    source_search_params: window.location.search,
  })

export enum LoginType {
  EMAIL = 'email',
  METAMASK = 'metamask',
  GOOGLE = 'google',
  TWITTER = 'twitter',
  WALLET = 'wallet',
}
export function trackLoginStart(method: LoginType) {
  const date = new Date()
  saveLoginMethod(method)

  return track('login_start', {
    method, // email, wallet, etc.
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,
    source_url: window.location.href,
  })
}

export const trackLoginFinish = (method: LoginType) => track('login_finish', { method })

export function trackAuthStart(method: LoginType) {
  const date = new Date()
  saveLoginMethod(method)

  return track('auth_start', {
    method, // email, wallet, etc.

    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,

    source_url: window.location.href,
    source_search_params: window.location.search,
    referrer: document.referrer,
  })
}
export function trackAuthFinish(method: LoginType, isNewUserSignup: boolean) {
  const date = new Date()

  return track('auth_finish', {
    method, // email, wallet, etc.
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

export const trackLogout = () =>
  track('logout', {
    timestamp: Date.now(),
    source_url: window.location.href,
  })

export const trackError = (data: any) =>
  track('error', {
    ...data,
    source_url: window.location.href,
  })

export enum PageType {
  EXPLORER = 'explorer',
  CHARTS = 'charts',
  DASHBOARDS = 'dashboards',
  WATCHLIST = 'watchlist',
  SCREENER = 'screener',
  ALERTS = 'alerts',
  INSIGHTS = 'insights',
  PROFILE = 'profile',
  ACCOUNT = 'account',
  SOCIAL_TOOL = 'social_tool',
  HISTORICAL_BALANCE = 'historical_balance',
  LABS = 'labs',
  SignUp = 'signup',
  Login = 'login',
}
export const trackPageView = ({
  url = window.location.href,
  type,
  sourceType,
  sourceUrl,
  searchParams,
  sourceSearchParams,
}: {
  url: string
  type: PageType
  sourceType: PageType
  sourceUrl: string
  searchParams?: string
  sourceSearchParams?: string
}) =>
  track('page_view', {
    url,
    type,
    search_params: searchParams,
    source_type: sourceType,
    source_url: sourceUrl,
    source_search_params: sourceSearchParams,
  })

export const trackSideNavFeatures = ({
  url,
  type,
  sourceType,
}: {
  url: string
  type: PageType
  sourceType: PageType
}) =>
  track('side_nav_features', {
    type,
    url,
    source_type: sourceType,
    source_url: window.location.href,
  })

export const trackSideNavRecents = ({ feature, url, source }) =>
  track('side_nav_recents', { feature, url, source, source_url: window.location.href })

export const trackLink = ({ type, url, source, external = false }) =>
  track('link', {
    type,
    url,
    source,
    external,
    source_url: window.location.href,
    source_search_params: window.location.search,
  })

export const trackGetAiSummary = ({
  trend,
  source,
  has_summary,
}: {
  trend: string
  source: string
  has_summary: boolean
}) => track('get_ai_summary', { trend, has_summary, source, source_url: window.location.href })

export const trackChangeSanbaseVersion = ({
  version,
  source,
}: {
  version: string
  source: string
}) =>
  track('change_sanbase_version', {
    version,
    source,
    source_url: window.location.href,
  })
