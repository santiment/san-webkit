<script lang="ts">
  import { Fetcher } from '$lib/api/index.js'
  import Button from '$ui/core/Button/index.js'
  import { tap } from 'rxjs'

  const queryCurrentUser = Fetcher(
    () => `{ currentUser { id  } }`,
    (gql: { currentUser: null | { id: number } }) => gql.currentUser,
  )

  function onClick() {
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
