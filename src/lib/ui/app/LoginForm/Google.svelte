<script lang="ts">
  import type { ComponentProps } from 'svelte'

  // import { LoginType, trackAuthStart, trackLoginStart } from '@/analytics/events/general'
  // import { trackSignupStart } from '@/analytics/events/onboarding'
  // import { getOAuthLink } from '@/utils/auth'
  import Option from './Option.svelte'

  type Props = { from?: string } & Omit<
    ComponentProps<typeof Option>,
    'title' | 'href' | 'icon' | 'onclick'
  >

  const { from = '', ...rest }: Props = $props()
</script>

<Option
  {...rest}
  title="Google"
  href={"getOAuthLink('google', from)"}
  icon="google"
  onclick={() => {
    // trackAuthStart(LoginType.GOOGLE)

    if (rest.isSignUp) {
      // trackSignupStart(LoginType.GOOGLE)
    } else {
      // trackLoginStart(LoginType.GOOGLE)
    }
  }}
/>
