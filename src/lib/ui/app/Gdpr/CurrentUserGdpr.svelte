<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { page } from '$app/stores'

  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'

  import Gdpr from './Gdpr.svelte'

  type TProps = Pick<
    ComponentProps<typeof Gdpr>,
    'class' | 'title' | 'description' | 'onAccept'
  > & {
    children: Snippet
  }

  const { children, ...gdpr }: TProps = $props()

  const { currentUser } = useCustomerCtx()
</script>

{#if !currentUser.$$ || currentUser.$$?.privacyPolicyAccepted || $page.url.pathname === '/privacy-policy'}
  {@render children()}
{:else}
  <Gdpr {...gdpr} />
{/if}
