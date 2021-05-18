import { trackSanEvent } from '../api/analytics'

enum Tracker {
  GA = 'ga',
  SAN = 'san',
}

const noop = () => {} // eslint-disable-line
function canTrackBrowser() {
  const dnt: string | null =
    navigator.doNotTrack || window.doNotTrack || (navigator as any).msDoNotTrack
  return dnt !== '1' && dnt !== 'yes'
}

export const isTrackingEnabled =
  process.browser && process.env.IS_PROD_BACKEND && canTrackBrowser()

const DEFAULT_TRACKERS = [Tracker.GA, Tracker.SAN]

type EventData = { [key: string]: string | number }
type SendEvent = (
  eventName: string,
  data?: EventData,
  trackers?: Tracker[],
) => number
const event: SendEvent = isTrackingEnabled
  ? (
      action,
      { category, label, ...rest } = {},
      trackers = DEFAULT_TRACKERS,
    ) => {
      if (process.env.IS_STAGE_BACKEND) {
        console.log('Tracking event ->', action, { category, label, ...rest })
      }
      const date = Date.now()

      if (trackers.includes(Tracker.GA)) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          ...rest,
        })
      }

      if (trackers.includes(Tracker.SAN)) {
        trackSanEvent(action, new Date(date), {
          event_category: category,
          event_label: label,
          ...rest,
        })
      }

      return date
    }
  : (noop as any)

export const track = {
  event,
  pageview(app_name: string): void {
    event('page_view', {
      app_name,
      page_path: window.location.pathname,
    })
  },
  timedPageview(prevTimer: number, timeout = 10000): number {
    window.clearTimeout(prevTimer)
    return window.setTimeout(track.pageview, timeout)
  },
}

if (!process.browser) {
  Object.keys(track).forEach((key) => ((track as any)[key] = noop))
}
