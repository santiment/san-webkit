<script lang="ts">
  import { useWebsocketApiCtx } from '$lib/ctx/ws/ctx.svelte.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/Input.svelte'

  const { searchUserByUsername } = useWebsocketApiCtx()

  type User = Awaited<ReturnType<typeof searchUserByUsername>>[number]

  let username = $state('')
  let users = $state<User[]>([])
</script>

<main class="flex flex-col p-10 center">
  <Button
    onclick={() => {
      searchUserByUsername(username).then((_users) => (users = _users))
    }}
  >
    Search user
  </Button>
  <Input value={username} oninput={(e) => (username = e.currentTarget.value)} />

  <h3>Found users:</h3>
  <pre>{JSON.stringify(users, undefined, 2)}</pre>
</main>
