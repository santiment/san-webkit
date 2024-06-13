<script lang="ts">
  import { exhaustMap, take, tap, timer } from 'rxjs'
  import { Fetcher } from '$lib/api/index.js'
  import { useObserveFnCall } from '$lib/utils/index.js'
  import Button from '$ui/core/Button/index.js'

  const queryCurrentUser = Fetcher(
    () => `{ currentUser { id  } }`,
    (gql: { currentUser: null | { id: number } }) => gql.currentUser,
  )

  let cacheTime = $state(0)

  const startCacheTimer = useObserveFnCall(() =>
    exhaustMap(() =>
      timer(0, 1000).pipe(
        tap((interval) => (cacheTime = 5 - interval)),
        take(6),
      ),
    ),
  )

  function onClick() {
    startCacheTimer()

    queryCurrentUser()()
      .pipe(tap((data) => console.log('First', data)))
      .subscribe()

    queryCurrentUser()()
      .pipe(tap((data) => console.log('Second', data)))
      .subscribe()

    queryCurrentUser()()
      .pipe(tap((data) => console.log('Third', data)))
      .subscribe()
  }
</script>

<Button variant="fill" onclick={onClick}>Run 3 requests</Button>

{#if cacheTime}
  Cache is valid for {cacheTime}s. No new requests will be made
{:else}
  No cache available. There will be new request in `Network` tab
{/if}
