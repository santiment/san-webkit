import { TrackCategory } from './utils'

const track = TrackCategory('General')

export const trackAppOpen = () => track('app_open')

export const trackAppClose = () => track('app_close')

export function trackLogin(type: string) {
  const date = new Date()

  return track('login', {
    type, // email, wallet, etc.
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: +date,
  })
}

export const trackLogout = () => track('logout', { timestramp: Date.now() })

export const trackError = (data: any) => track('error', data)

// TODO
export const trackPageView = ({ id, page_type, pageview_source }) =>
  track('page_view', {
    id,
    page_type,
    pageview_source,
  })
