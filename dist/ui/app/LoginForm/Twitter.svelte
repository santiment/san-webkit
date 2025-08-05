<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { get } from 'svelte/store'

  import { page } from '$app/stores'

  import { getOAuthLink } from '../../../utils/auth.js'
  import { trackAuth } from '../../../analytics/events/auth.js'

  import Option from './Option.svelte'

  type TProps = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from, isSignUp, ...rest }: TProps = $props()

  const origin = get(page).url.origin
</script>

<Option
  {...rest}
  {isSignUp}
  title="Twitter"
  href={getOAuthLink('twitter', origin, from)}
  icon="twitter"
  onclick={() => trackAuth('twitter')}
/>
