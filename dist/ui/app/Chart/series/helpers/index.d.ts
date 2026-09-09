import type { TAsset } from '../../../../../ctx/assets/api.js';
import type { TSeries } from '../../ctx/series.svelte.js';
export declare function getAssetSelectorLabel(getAssetBySlug: (slug: undefined | null | string) => undefined | TAsset, metric: Extract<TSeries, {
    selector: any;
}>): string | undefined;
export declare function formatAssetTicker(asset: Pick<TAsset, 'ticker' | 'chain'>): string;
