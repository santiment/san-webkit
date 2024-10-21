import { sveltekit as _sveltekit } from '@sveltejs/kit/vite';
export declare const IS_DEV_MODE: boolean;
export declare const BACKEND_URL: string;
export declare const GQL_SERVER_URL: string;
export declare const IS_STAGE_BACKEND: boolean;
export declare const IS_PROD_BACKEND: boolean;
export declare const GIT_HEAD: string;
export declare const GIT_HEAD_DATETIME: Date;
export declare const SENTRY_DSN: string;
export declare const SENTRY_URL: string;
export declare const ROOT: string;
export declare function createConfig({ corsOrigin, sveltekit, }?: {
    corsOrigin?: string;
    sveltekit?: typeof _sveltekit;
}): import("vite").UserConfig & Promise<import("vite").UserConfig> & (import("vite").UserConfigFnObject & import("vite").UserConfigExport);
declare const _default: Record<string, any>;
export default _default;
