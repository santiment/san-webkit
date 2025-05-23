import type { TAssetSlug } from '../../../../../../ctx/assets/api.js';
export type TAssetState = {
    target: {
        slugs: TAssetSlug[];
        namesMap: Map<TAssetSlug, string>;
    };
};
export declare function stateIsAsset(state: unknown): state is TAssetState;
