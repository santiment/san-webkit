import { sveltekit as _sveltekit } from '@sveltejs/kit/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
export declare const IS_DEV_MODE: boolean;
export declare const BACKEND_URL: string;
export declare const GQL_SERVER_URL: string;
export declare const IS_STAGE_BACKEND: boolean;
export declare const IS_PROD_BACKEND: boolean;
export declare const GIT_HEAD: string;
export declare function createConfig({ corsOrigin, sveltekit, sentry, }?: {
    corsOrigin?: string;
    sveltekit?: typeof _sveltekit;
    sentry?: Parameters<typeof sentryVitePlugin>[0];
}): import("vite").UserConfig;
declare const _default: Record<string, any>;
export default _default;
