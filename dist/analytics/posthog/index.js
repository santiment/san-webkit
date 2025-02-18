import { posthog } from 'posthog-js';
import { BROWSER } from 'esm-env';
export const POSTHOG_URL = 'https://eu.i.posthog.com';
export const PROXY_ROUTE = '/api/track/posthog';
export function initPosthog(id = 'phc_uehdF88phYxAqgTbYH5GHjM2dy2Us8AcI5r1zoIRLw9') {
    if (!BROWSER)
        return;
    if (process.env.IS_LOGGING_ENABLED)
        return;
    posthog.init(id, {
        api_host: PROXY_ROUTE,
        ui_host: POSTHOG_URL,
        person_profiles: 'identified_only',
        enable_heatmaps: true,
        autocapture: true,
    });
}
