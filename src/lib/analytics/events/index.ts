import { BROWSER } from 'esm-env'
import { track, type TEventData } from './track.js'
import type { TGenericAnalyticEvents } from './types.js'

export const trackEvent = (
  event: TGenericAnalyticEvents,
  props:
    | TEventData
    | Partial<{
        type: string
        source: string
        action: string
      }>,
) =>
  BROWSER &&
  track.event(event, {
    category: 'General',

    source_url: window.location.origin + window.location.pathname,
    source_url_type: window.getPageType?.(window.location.pathname),
    source_search_params: window.location.search,

    ...props,

    release_version: process.env.VERSION || process.env.GIT_HEAD,
  })
