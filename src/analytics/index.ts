import { trackSanEvent } from '@/api/analytics'
import { normalizeData } from './utils'
import { TwitterTrackActions } from './twitter'

export enum Tracker {
  GA = 'ga',
  SAN = 'san',
  TWQ = 'twq',
  AMPLITUDE = 'AMPLITUDE',
}

const noop = () => {} // eslint-disable-line
function canTrackBrowser() {
  const dnt: string | null =
    // @ts-ignore
    navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack
  return dnt !== '1' && dnt !== 'yes'
}

export const isTrackingEnabled =
  process.browser &&
  (process.env.IS_DEV_MODE || (process.env.IS_PROD_BACKEND ? canTrackBrowser() : true))

const DEFAULT_TRACKERS = [Tracker.GA, Tracker.SAN, Tracker.AMPLITUDE]

export type EventData = {
  [key: string]: undefined | string | number | string[] | number[] | boolean | boolean[]
}
type SendEvent = (eventName: string, data?: EventData, trackers?: Tracker[]) => number
const event: SendEvent = isTrackingEnabled
  ? (action, { category, label, ...rest } = {}, trackers = DEFAULT_TRACKERS) => {
      if (process.env.IS_DEV_MODE || process.env.IS_PROD_BACKEND === false) {
        const dnt = canTrackBrowser() ? '' : ' (DNT)'
        console.log(
          '%c[DEV ONLY] Analytics' + dnt,
          'background:#FFCB47;color:black;padding:3px;border-radius:4px',
          normalizeData({
            event: action,
            category,
            label,
            ...rest,
          }),
        )
        return
      }

      const date = Date.now()

      if (trackers.includes(Tracker.TWQ) && window.twq) {
        window.twq('track', action, normalizeData(rest))
      }

      if (trackers.includes(Tracker.GA) && window.gtag) {
        window.gtag(
          'event',
          action,
          normalizeData({
            event_category: category,
            event_label: label,
            ...rest,
          }),
        )
      }

      if (trackers.includes(Tracker.SAN)) {
        trackSanEvent(
          action,
          new Date(date),
          normalizeData({
            event_category: category,
            event_label: label,
            ...rest,
          }),
        )
      }

      if (trackers.includes(Tracker.AMPLITUDE) && window.amplitude && window.amplitude.track) {
        window.amplitude.track(
          action,
          normalizeData({
            event_category: category,
            event_label: label,
            ...rest,
          }),
        )
        // NOTE: Was causing issues, since was called before amplitude's internal config init
        // window.amplitude.flush()
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

    if (typeof window.twq === 'function') {
      event(TwitterTrackActions.pageview, {}, [Tracker.TWQ])
    }
  },
  timedPageview(prevTimer: number, timeout = 10000): number {
    window.clearTimeout(prevTimer)
    return window.setTimeout(track.pageview, timeout)
  },
}

if (!process.browser) {
  Object.keys(track).forEach((key) => ((track as any)[key] = noop))
}
