import { onMount } from 'svelte';
import { createCtx } from '../../utils/index.js';
import { Query } from '../../api/executor.js';
import { queryAllProjects } from './api.js';
export const useAssetsCtx = createCtx('webkit_useAssetsCtx', () => {
    let assets = $state.raw([]);
    const assetBySlugMap = $derived(new Map(assets.map((item) => [item.slug, item])));
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
            return assetBySlugMap.get(slug);
        },
    };
});
