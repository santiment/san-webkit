import { handleErrorWithSentry as _handleErrorWithSentry } from '@sentry/sveltekit';
type TErrorHandler = NonNullable<Parameters<typeof _handleErrorWithSentry>[0]>;
type TErrorHandlerInput = Parameters<TErrorHandler>[0];
export declare const handleErrorWithSentry: (handleIgnores?: (input: TErrorHandlerInput) => void | App.Error, sentryHandler?: TErrorHandler) => (input: TErrorHandlerInput) => Promise<void | App.Error>;
export {};
