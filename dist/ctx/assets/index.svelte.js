import { onMount } from 'svelte';
import { BROWSER } from 'esm-env';
import { createCtx } from '../../utils/index.js';
import { Query } from '../../api/executor.js';
import { FIATS, FUNDS, INDICES_AND_SUPPLY, queryAllProjects, } from './api.js';
// TODO: Replace with build time vite plugin
let DEFAULT_ASSETS = [];
export const defaultAssetsPromise = BROWSER
    ? queryAllProjects(Query)().then((items) => (DEFAULT_ASSETS = items))
    : Promise.resolve();
export const useAssetsCtx = createCtx('webkit_useAssetsCtx', () => {
    let assets = $state.raw(DEFAULT_ASSETS);
    const assetBySlugMap = $derived(new Map(assets
        .concat(FIATS, FUNDS, INDICES_AND_SUPPLY)
        .map((item) => [item.slug.toLowerCase(), item])));
    const assetByTickerMap = $derived(createAssetTickerMap(assets));
    onMount(() => {
        queryAllProjects(Query)().then((items) => (assets = items));
    });
    return {
        assets: {
            get $() {
                return assets;
            },
        },
        getAssetBySlug(slug) {
            return slug ? assetBySlugMap.get(slug.toLowerCase()) : undefined;
        },
        /**
         * Returns first matched ticker with highest rank
         */
        getAssetByTicker(ticker) {
            return ticker ? assetByTickerMap.get(ticker.toLowerCase()) : undefined;
        },
    };
});
function createAssetTickerMap(assets) {
    const map = new Map();
    for (const asset of assets) {
        const ticker = asset.ticker?.toLowerCase();
        if (map.has(ticker))
            continue;
        map.set(ticker, asset);
    }
    return map;
}
