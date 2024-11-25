<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { Gdpr } from '$lib/ui/app/LoginForm/index.js'

  const currentUser = useCustomerCtx()

  function onAccept(username: string) {
    console.log('username', username)
  }
</script>

{#if currentUser.currentUser.$$}
  <Gdpr {onAccept} />
{/if}
