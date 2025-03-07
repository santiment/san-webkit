import { onMount } from 'svelte';
import { createCtx } from '../../utils/index.js';
import { ApiQuery } from '../../api/index.js';
import { Query } from '../../api/executor.js';
export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      rank`;
export const queryAllProjects = ApiQuery(() => `{
    allProjects{ ${PROJECT_FRAGMENT} }
  }`, (gql) => gql.allProjects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999)), {
    cacheTime: undefined,
});
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
