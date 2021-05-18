import type { Query } from './index'
import { query, mutate } from './index'

const CURRENT_USER_QUERY = `
  {
    currentUser {
      id
    }
  }
`
type CurrentUser = null | Query<'currentUser', { id: number }>

const EVENT_MUTATION = `
  mutation trackEvents($event: json) {
    trackEvents(events: $event)
  }
`

type EventData = { [key: string]: string | number }
export function trackSanEvent(
  event_name: string,
  created_at: Date,
  metadata: EventData,
) {
  return query<CurrentUser>(CURRENT_USER_QUERY).then(({ currentUser }) => {
    if (!currentUser) return

    return mutate(EVENT_MUTATION, {
      variables: {
        event: JSON.stringify([
          {
            event_name,
            metadata,
            created_at: created_at.toISOString(),
          },
        ]),
      },
    })
  })
}
