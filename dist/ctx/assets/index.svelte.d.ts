import { type TAsset } from './api.js';
export declare const useAssetsCtx: (() => {
    assets: {
        readonly $: TAsset[];
    };
    getAssetBySlug(slug: string): undefined | TAsset;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: string): undefined | TAsset;
    };
    set: () => {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: string): undefined | TAsset;
    };
};
