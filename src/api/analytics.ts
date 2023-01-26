import { getDeviceId } from '@/analytics/device'
import { query, mutate } from '@/api'

export const CURRENT_USER_QUERY = `
  {
    currentUser {
      id
    }
  }
`

export type CurrentUser = { id: number } | null
type CurrentUserQuery = SAN.API.Query<'currentUser', CurrentUser>

const currentUserAccessor = ({ currentUser }: CurrentUserQuery) => currentUser
export const queryCurrentUser = (): Promise<CurrentUser> =>
  query<CurrentUserQuery>(CURRENT_USER_QUERY).then(currentUserAccessor)

const EVENT_MUTATION = `
  mutation trackEvents($event: json, $anonymousUserId: String) {
    trackEvents(events: $event, anonymousUserId: $anonymousUserId)
  }
`

type EventData = { [key: string]: string | number }

export const trackSanEvent = (event_name: string, created_at: Date, metadata: EventData) =>
  // NOTE: Awaiting for next microtask to make sure that Intercom was initialized [@vanguard | 26 Jan, 2023]
  Promise.resolve().then(() =>
    mutate(EVENT_MUTATION, {
      variables: {
        anonymousUserId: getDeviceId(),
        event: JSON.stringify([
          {
            event_name,
            metadata,
            created_at: created_at.toISOString(),
          },
        ]),
      },
    }),
  )
