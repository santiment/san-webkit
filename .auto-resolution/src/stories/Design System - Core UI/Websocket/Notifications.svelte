<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { useWebsocketApiCtx } from '$lib/ctx/ws/ctx.svelte.js'
  import { noop } from 'rxjs'

  const { subscribeToNotifications } = useWebsocketApiCtx()
  const { currentUser, customer } = useCustomerCtx()

  let notifications = $state<number[]>([])

  $inspect({ currentUser: currentUser.$$, customer: customer.$ })

  $effect(() => {
    const unsub = currentUser.$$
      ? subscribeToNotifications(currentUser.$$.id, (notificationId) => {
          notifications.push(notificationId)
        })
      : noop

    return () => {
      unsub()
    }
  })
</script>

<main class="flex flex-col p-10 center">
  <h3>Notifications Received:</h3>
  {#each notifications as id}
    <div>{id}</div>
  {/each}
</main>
