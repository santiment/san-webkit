import type { TGenericAnalyticEvents } from './types.js'

import { BROWSER } from 'esm-env'

import { track, Tracker, type TEventData } from './track.js'

export const trackEvent = (
  event: TGenericAnalyticEvents,
  props:
    | TEventData
    | Partial<{
        type: string
        source: string
        action: string
      }>,
  trackers?: Tracker[],
) =>
  BROWSER &&
  track.event(
    event,
    {
      category: 'General',

      source_url: window.location.origin + window.location.pathname,
      source_url_type: window.getPageType?.(window.location.pathname),
      source_search_params: window.location.search,

      ...props,

      referrer: document.referrer,
      release_version: process.env.VERSION || process.env.GIT_HEAD,
      release_date: process.env.GIT_HEAD_DATETIME,
    },
    trackers,
  )
