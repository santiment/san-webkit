<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { Gdpr } from '$lib/ui/app/LoginForm/index.js'

  const currentUser = useCustomerCtx()

  function onAccept(username: string) {
    console.log('username', username)
  }
</script>

<div class="flex h-screen items-center justify-center">
  {#if !currentUser.currentUser.$$ || currentUser.currentUser.$$.privacyPolicyAccepted}
    <h1 class="text-base">Gdpr policy is accepted</h1>
  {:else}
    <Gdpr currentUser={currentUser.currentUser.$$} {onAccept} />
  {/if}
</div>
