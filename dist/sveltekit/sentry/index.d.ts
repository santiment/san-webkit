import { handleErrorWithSentry as _handleErrorWithSentry } from '@sentry/sveltekit';
export { sentryHandle } from '@sentry/sveltekit';
export declare const handleErrorWithSentry: (handler?: Parameters<typeof _handleErrorWithSentry>[0]) => (input: any) => Promise<void | App.Error>;
