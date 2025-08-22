import { onMount } from 'svelte'
import { map, pipe, switchMap, tap } from 'rxjs'

import { createCtx } from '$lib/utils/index.js'
import { useObserveFnCall } from '$lib/utils/observable.svelte.js'

import { queryUserWatchlists, type Watchlist } from './api.js'

export const useUserWatchlistsCtx = createCtx(
  'webkit_useUserWatchlistsCtx',
  ({ loadScreeners = false }: { loadScreeners?: boolean } = {}) => {
    let watchlists = $state<Watchlist[]>([])

    const watchlistsMap = $derived(
      new Map(watchlists.map((watchlist) => [watchlist.id, watchlist])),
    )

    const loadWatchlists = useObserveFnCall(() =>
      pipe(
        switchMap(() => queryUserWatchlists()()),
        map((watchlists) => watchlists.filter(({ isScreener }) => loadScreeners === isScreener)),
        tap((_watchlists) => (watchlists = _watchlists)),
      ),
    )

    onMount(() => loadWatchlists())

    return {
      watchlists: {
        get $() {
          return watchlists
        },
      },

      getWatchlistById: (id: Watchlist['id']) => watchlistsMap.get(id),
    }
  },
)
