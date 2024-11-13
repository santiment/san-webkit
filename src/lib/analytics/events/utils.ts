import type { TEventData, Tracker } from './track.js'

import { track } from './track.js'

export function TrackCategory(category: string) {
  const data = (data?: TEventData) => ({ ...data, category })

  return (event: string, properties?: TEventData, trackers?: Tracker[]) =>
    track.event(event, data(properties), trackers)
}
