<script>
  import { LoginType, trackLoginStart } from '@/analytics/events/general'
  import { trackSignupStart } from '@/analytics/events/onboarding'
  import { getOAuthLink } from '@/utils/auth'
  import Option from './Option.svelte'
</script>

<Option
  {...$$props}
  title="Google"
  href={getOAuthLink('google')}
  icon="google"
  on:click={() => {
    if ($$props.isSignUp) {
      trackSignupStart(LoginType.METAMASK)
    } else {
      trackLoginStart(LoginType.GOOGLE)
    }
  }}
/>
