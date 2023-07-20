import { query, mutate } from './../api/index.js';
import { getDeviceId } from './../analytics/device.js';
export const CURRENT_USER_QUERY = `
  {
    currentUser {
      id
    }
  }
`;
const currentUserAccessor = ({ currentUser }) => currentUser;
export const queryCurrentUser = () => query(CURRENT_USER_QUERY).then(currentUserAccessor);
const EVENT_MUTATION = `
  mutation trackEvents($event: json, $anonymousUserId: String) {
    trackEvents(events: $event, anonymousUserId: $anonymousUserId)
  }
`;
export const trackSanEvent = (event_name, created_at, metadata) => 
// NOTE: Awaiting for next microtask to make sure that Intercom was initialized [@vanguard | 26 Jan, 2023]
Promise.resolve().then(() => mutate(EVENT_MUTATION, {
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
}));
//# sourceMappingURL=analytics.js.map