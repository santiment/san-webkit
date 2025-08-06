import { onMount } from 'svelte';
import { map, pipe, switchMap, tap } from 'rxjs';
import { createCtx } from '../../../../../utils/index.js';
import { useObserveFnCall } from '../../../../../utils/observable.svelte.js';
import { queryUserWatchlists } from './api.js';
export const useUserWatchlistsCtx = createCtx('webkit_useUserWatchlistsCtx', ({ loadScreeners = false } = {}) => {
    let watchlists = $state([]);
    const watchlistsMap = $derived(new Map(watchlists.map((watchlist) => [watchlist.id, watchlist])));
    const loadWatchlists = useObserveFnCall(() => pipe(switchMap(() => queryUserWatchlists()()), map((watchlists) => watchlists.filter(({ isScreener }) => loadScreeners === isScreener)), tap((_watchlists) => (watchlists = _watchlists))));
    onMount(() => loadWatchlists());
    return {
        watchlists: {
            get $() {
                return watchlists;
            },
        },
        getWatchlistById: (id) => watchlistsMap.get(id),
    };
});
