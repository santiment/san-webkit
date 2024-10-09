<script lang="ts">
  // import { LoginType, trackAuthStart, trackLoginStart } from '@/analytics/events/general'
  // import { trackSignupStart } from '@/analytics/events/onboarding'
  // import { getOAuthLink } from '@/utils/auth'
  import Option from './Option.svelte'
  import type { ComponentProps } from 'svelte'

  type Props = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from = '', ...rest }: Props = $props()
</script>

<Option
  {...rest}
  title="Twitter"
  href={"getOAuthLink('twitter', from)"}
  icon="twitter"
  onclick={() => {
    // trackAuthStart(LoginType.TWITTER)

    if (rest.isSignUp) {
      // trackSignupStart(LoginType.TWITTER)
    } else {
      // trackLoginStart(LoginType.TWITTER)
    }
  }}
/>
