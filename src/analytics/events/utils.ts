import type { EventData } from '../index'
import { track } from '../index'

export function TrackCategory(category: string) {
  const data = (data?: EventData) => ({ ...data, category })

  return (event: string, properties?: EventData) => track.event(event, data(properties))
}
