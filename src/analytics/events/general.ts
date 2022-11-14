import { TrackCategory } from './utils'

const track = TrackCategory('General')

export const trackAppOpen = () => track('app_open')

export const trackAppClose = () => track('app_close')

export enum LoginType {
  EMAIL = 'email',
  METAMASK = 'metamask',
  GOOGLE = 'google',
  TWITTER = 'twitter',
  WALLET = 'wallet',
}
export function trackLogin(type: LoginType) {
  const date = new Date()

  return track('login', {
    type, // email, wallet, etc.
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,
    source_url: window.location.href,
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
  CHARTS = 'charts',
  DASHBOARDS = 'dashboards',
  WATCHLIST = 'watchlist',
  SCREENER = 'screener',
  ALERTS = 'alerts',
  INSIGHTS = 'insights',
  PROFILE = 'profile',
  ACCOUNT = 'account',
}
export const trackPageView = ({
  url = window.location.href,
  type,
  source,
}: {
  url: string
  type: PageType
  source: PageType
}) => track('page_view', { url, type, source })
