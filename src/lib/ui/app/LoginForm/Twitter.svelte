<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { getOAuthLink } from '$lib/utils/auth.js'
  import { trackAuth } from '$lib/analytics/events/auth.js'
  import Option from './Option.svelte'

  type TProps = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from, isSignUp, ...rest }: TProps = $props()
</script>

<Option
  {...rest}
  {isSignUp}
  title="Twitter"
  href={getOAuthLink('twitter', from)}
  icon="twitter"
  onclick={() => trackAuth('twitter')}
/>
