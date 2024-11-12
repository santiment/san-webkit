<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { Gdpr } from '$lib/ui/app/LoginPrompt/index.js'
</script>

<div class="flex h-screen items-center justify-center">
  <Gdpr
    currentUser={{ username: '', privacyPolicyAccepted: false }}
    onAccept={(username) => console.log('username', username)}
  />
</div>
