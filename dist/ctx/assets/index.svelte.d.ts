import { type TAsset } from './api.js';
export declare const defaultAssetsPromise: Promise<void> | Promise<TAsset[]>;
export declare const useAssetsCtx: (() => {
    assets: {
        readonly $: TAsset[];
    };
    getAssetBySlug(slug: undefined | null | string): undefined | TAsset;
    /**
     * Returns first matched ticker with highest rank
     */
    getAssetByTicker(ticker: undefined | null | string): undefined | TAsset;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: undefined | null | string): undefined | TAsset;
        /**
         * Returns first matched ticker with highest rank
         */
        getAssetByTicker(ticker: undefined | null | string): undefined | TAsset;
    };
    __CTX: "webkit_useAssetsCtx";
};
