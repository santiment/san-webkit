import { type Handle, type RequestEvent } from '@sveltejs/kit';
export declare const checkIsSanbaseCookiePresent: (event: RequestEvent) => string | undefined;
export declare const appSessionHandle: Handle;
export declare const normalizePathHandle: Handle;
export { amplitudeTrackHandle } from './amplitude.js';
export { sanbaseVersionHandle } from './sanbase.js';
export { cookiePolicyHandle } from './cookie.js';
export { posthogTrackHandle } from './posthog.js';
