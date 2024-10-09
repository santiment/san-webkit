<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { getOAuthLink } from '$lib/utils/auth.js'
  import Option from './Option.svelte'

  type Props = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from, ...rest }: Props = $props()
</script>

<Option
  {...rest}
  title="Twitter"
  href={getOAuthLink('twitter', from)}
  icon="twitter"
  onclick={() => {
    // FIXME: Add analytics here
  }}
/>
