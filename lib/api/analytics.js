import { query, mutate } from './../api'
export const CURRENT_USER_QUERY = `
  {
    currentUser {
      id
    }
  }
`
const currentUserAccessor = ({ currentUser }) => currentUser
export const queryCurrentUser = () => query(CURRENT_USER_QUERY).then(currentUserAccessor)
const EVENT_MUTATION = `
  mutation trackEvents($event: json) {
    trackEvents(events: $event)
  }
`
export const trackSanEvent = (event_name, created_at, metadata) =>
  queryCurrentUser().then((currentUser) => {
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
//# sourceMappingURL=analytics.js.map
