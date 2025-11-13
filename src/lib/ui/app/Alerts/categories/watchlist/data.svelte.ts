import { onMount } from 'svelte'
import { map, pipe, switchMap, tap } from 'rxjs'

import { createCtx } from '$lib/utils/index.js'
import { useObserveFnCall } from '$lib/utils/observable.svelte.js'

import { queryUserWatchlists, type Watchlist } from './api.js'
import { queryUserScreenerAlerts } from '../screener/api.js'
import { getApiWatchlistId } from '../screener/screener-form-step/schema.js'

export const useUserWatchlistsCtx = createCtx(
  'webkit_useUserWatchlistsCtx',
  ({ loadScreeners = false }: { loadScreeners?: boolean } = {}) => {
    let watchlists = $state<Watchlist[]>([])
    let userScreenerAlerts = $state<TScreenerAlertMap>({})

    const watchlistsWithRelatedAlerts = $derived(
      watchlists.map((watchlist) => ({
        ...watchlist,
        alerts: userScreenerAlerts[watchlist.id],
      })),
    )
    const watchlistsMap = $derived(
      new Map(watchlistsWithRelatedAlerts.map((watchlist) => [watchlist.id, watchlist])),
    )

    const loadWatchlists = useObserveFnCall(() =>
      pipe(
        switchMap(() => queryUserWatchlists()()),
        map((watchlists) => watchlists.filter(({ isScreener }) => loadScreeners === isScreener)),
        tap((_watchlists) => (watchlists = _watchlists)),
      ),
    )

    type TScreenerAlertMap = Record<string, Set<string> | undefined>

    const loadUserScreenerAlerts = useObserveFnCall(() =>
      pipe(
        switchMap(() => queryUserScreenerAlerts()()),
        map((alerts) =>
          alerts.reduce<TScreenerAlertMap>((acc, alert) => {
            const alertId = alert.id
            const screenerId = getApiWatchlistId(alert.settings)
            if (!screenerId) return acc

            const screenerAlerts = acc.screenerId ?? new Set<string>()
            screenerAlerts.add(alertId)

            return { ...acc, [screenerId]: screenerAlerts }
          }, {}),
        ),
        tap((_alerts) => (userScreenerAlerts = _alerts)),
      ),
    )

    onMount(() => {
      loadWatchlists()
      if (loadScreeners) {
        loadUserScreenerAlerts()
      }
    })

    return {
      watchlists: {
        get $() {
          return watchlistsWithRelatedAlerts
        },
      },

      getWatchlistById: (id: Watchlist['id']) => watchlistsMap.get(id),

      checkWatchlistHasAnotherAlert: (
        watchlistAlerts: Set<string> | undefined,
        alertId: number | string | undefined,
      ) => {
        const alerstCount = watchlistAlerts?.size
        if (!alerstCount) return false
        if (alerstCount > 1) return true

        return alertId ? !watchlistAlerts.has(alertId.toString()) : true
      },
    }
  },
)
