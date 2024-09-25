<script lang="ts">
  import { exhaustMap, merge, mergeMap, pipe, take, tap, timer } from 'rxjs'
  import { ApiQuery } from '$lib/api/index.js'
  import { useObserveFnCall } from '$lib/utils/index.js'
  import Button from '$ui/core/Button/index.js'
  import { Query } from '$lib/api/executor.js'

  const queryCurrentUser = ApiQuery(
    () => `{ currentUser { id  } }`,
    (gql: { currentUser: null | { id: number } }) => gql.currentUser,
  )

  let cacheTime = $state(0)

  const startCacheTimer = useObserveFnCall(() =>
    pipe(
      mergeMap(() =>
        merge(
          queryCurrentUser()().pipe(tap((data) => console.log('First', data))),

          queryCurrentUser()().pipe(tap((data) => console.log('Second', data))),

          queryCurrentUser()().pipe(tap((data) => console.log('Third', data))),
        ),
      ),
      exhaustMap(() =>
        timer(0, 1000).pipe(
          tap((interval) => (cacheTime = 5 - interval)),
          take(6),
        ),
      ),
    ),
  )

  function onClick() {
    startCacheTimer()
    queryCurrentUser(Query)().then((data) => console.log('Promise based', data))
  }
</script>

<Button variant="fill" onclick={onClick}>Run 3 requests</Button>

{#if cacheTime}
  Cache is valid for {cacheTime}s. No new requests will be made
{:else}
  No cache available. There will be new request in `Network` tab
{/if}
