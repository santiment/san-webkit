import { trackEvent } from './index.js'
import type { TEventData, Tracker } from './track.js'

export function TrackCategory(category: string) {
  const data = (data?: TEventData) => ({ ...data, category })

  return (event: string, properties?: TEventData, trackers?: Tracker[]) =>
    trackEvent(event, data(properties), trackers)
}
