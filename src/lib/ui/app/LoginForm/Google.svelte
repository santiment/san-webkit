<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { getOAuthLink } from '$lib/utils/auth.js'
  import Option from './Option.svelte'
  import { trackAuth } from '$lib/analytics/events/auth.js'

  type Props = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from, isSignUp, ...rest }: Props = $props()
</script>

<Option
  {...rest}
  {isSignUp}
  title="Google"
  href={getOAuthLink('google', from)}
  icon="google"
  onclick={() => trackAuth('google', isSignUp)}
/>
