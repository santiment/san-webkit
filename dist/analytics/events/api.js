import { BROWSER } from 'esm-env';
import { ApiMutation } from '../../api/index.js';
import { getCookie, setCookie } from '../../utils/cookies.js';
import { uuidv7 } from '../../utils/uuid/index.js';
export const trackSanEvent = ApiMutation((event_name, created_at, metadata) => ({
    schema: `
  mutation trackEvents($event: json, $anonymousUserId: String) {
    trackEvents(events: $event, anonymousUserId: $anonymousUserId)
  }
`,
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
const SAN_COOKIE = 'san-track-id';
function getDeviceId() {
    if (!BROWSER)
        return;
    // NOTE: Searching for intercom's cookie with generated device id [@vanguard | 26 Jan, 2023]
    const intercomDeviceId = getCookie('device-id', (cookie) => cookie.includes('device-id'));
    if (intercomDeviceId) {
        return intercomDeviceId;
    }
    return getCookie(SAN_COOKIE) || setCookie(SAN_COOKIE, uuidv7());
}
