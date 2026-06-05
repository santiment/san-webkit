<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { page } from '$app/stores'

  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'

  import Gdpr from './Gdpr.svelte'

  type TProps = {
    class?: string
    onAccept: ComponentProps<typeof Gdpr>['onAccept']
    children: Snippet
  }

  const { class: className = '', onAccept, children }: TProps = $props()

  const { currentUser } = useCustomerCtx()
</script>

{#if !currentUser.$$ || currentUser.$$?.privacyPolicyAccepted || $page.url.pathname === '/privacy-policy'}
  {@render children()}
{:else}
  <div class={className}>
    <Gdpr {onAccept} />
  </div>
{/if}
