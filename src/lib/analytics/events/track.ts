import { BROWSER } from 'esm-env'
import { track as amplitudeTrack } from '@amplitude/analytics-browser'
import { Query } from '$lib/api/executor.js'
import { trackSanEvent } from './api.js'

export enum Tracker {
  GA = 'ga',
  SAN = 'san',
  TWQ = 'twq',
  AMPLITUDE = 'AMPLITUDE',
}

function canTrackBrowser(): boolean {
  const dnt: string | null =
    // @ts-ignore
    navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack
  return dnt !== '1' && dnt !== 'yes'
}

const DEFAULT_TRACKERS = [Tracker.GA, Tracker.SAN, Tracker.AMPLITUDE]

export type TEventData = {
  [key: string]: undefined | string | number | string[] | number[] | boolean | boolean[]
}
type TTrackEventFn = (eventName: string, data?: TEventData, trackers?: Tracker[]) => void

export const track: { event: TTrackEventFn } = {
  event(action, { category, label, ...rest } = {}, trackers = DEFAULT_TRACKERS) {
    if (!BROWSER) return

    const isTrackingDisabled = !canTrackBrowser()

    if (process.env.IS_DEV_MODE || process.env.IS_STAGE_BACKEND) {
      console.log(
        '%c[DEV ONLY] Analytics',
        'background:#FFCB47;color:black;padding:3px;border-radius:4px',
        normalizeData({ event: action, category, label, ...rest }),
      )
      return
    }

    if (isTrackingDisabled) return

    const date = Date.now()

    if (trackers.includes(Tracker.AMPLITUDE)) {
      amplitudeTrack(
        action,
        normalizeData({ event_category: category, event_label: label, ...rest }),
      )
    }

    if (trackers.includes(Tracker.GA) && window.gtag) {
      window.gtag(
        'event',
        action,
        normalizeData({ event_category: category, event_label: label, ...rest }),
      )
    }

    if (trackers.includes(Tracker.SAN)) {
      trackSanEvent(Query)(
        action,
        new Date(date),
        normalizeData({ event_category: category, event_label: label, ...rest }),
      )
    }
  },
}

function normalizeData(data: Record<string, any>) {
  const normalized = {} as Record<string, any>
  for (const key in data) {
    if (data[key] !== undefined) normalized[key] = data[key]
  }
  return normalized
}
