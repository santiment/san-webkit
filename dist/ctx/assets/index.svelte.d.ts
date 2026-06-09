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
    get: (allCtxs?: Map<string, any>) => {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: undefined | null | string): undefined | TAsset;
        /**
         * Returns first matched ticker with highest rank
         */
        getAssetByTicker(ticker: undefined | null | string): undefined | TAsset;
    };
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
