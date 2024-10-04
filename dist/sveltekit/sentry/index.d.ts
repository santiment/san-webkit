import { handleErrorWithSentry as _handleErrorWithSentry } from '@sentry/sveltekit';
import type { HandleServerError } from '@sveltejs/kit';
export { sentryHandle } from '@sentry/sveltekit';
export declare const handleErrorWithSentry: (handler?: Parameters<typeof _handleErrorWithSentry>[0]) => HandleServerError;
