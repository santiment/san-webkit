import type { TAsset, TAssetSlug } from '../../../../../ctx/assets/api.js';
import type { TAssetState } from './asset-form-step/state.js';
export declare const getAssetTargetTitle: ({ slugs, namesMap }: TAssetState["target"]) => string;
export declare function mapSlugNames(slugs: TAssetSlug[], assetGetter: (slug: string) => TAsset | undefined): Map<TAssetSlug, string>;
