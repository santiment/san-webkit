import { BROWSER } from 'esm-env';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
export function initAmplitude(id = '4acc1be0881406053d73b6e7429248d5') {
    if (!BROWSER)
        return;
    if (process.env.IS_LOGGING_ENABLED)
        return;
    // @ts-expect-error
    window.amplitude = amplitude;
    amplitude.add(sessionReplayPlugin());
    amplitude.init(id, {
        flushIntervalMillis: 1,
        flushQueueSize: 1,
        serverUrl: '/api/track',
        serverZone: 'EU',
    });
}
export { useAmplitudeFlow } from './flow.svelte.js';
