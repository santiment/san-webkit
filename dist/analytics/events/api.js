import { BROWSER } from 'esm-env';
import { ApiMutation } from '../../api/index.js';
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
function getDeviceId() {
    if (!BROWSER)
        return;
    const cookies = document.cookie.split('; ');
    // NOTE: Searching for intercom's cookie with generated device id [@vanguard | 26 Jan, 2023]
    const cookie = cookies.find((cookie) => cookie.includes('device-id'));
    if (!cookie)
        return;
    return cookie.split('=')[1];
}
