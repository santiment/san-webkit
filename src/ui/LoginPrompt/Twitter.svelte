<script>
  import { LoginType, trackAuthStart, trackLoginStart } from '@/analytics/events/general'
  import { trackSignupStart } from '@/analytics/events/onboarding'
  import { getOAuthLink } from '@/utils/auth'
  import Option from './Option.svelte'
</script>

<Option
  {...$$props}
  title="Twitter"
  href={getOAuthLink('twitter')}
  icon="twitter"
  on:click={() => {
    trackAuthStart(LoginType.TWITTER)

    if ($$props.isSignUp) {
      trackSignupStart(LoginType.TWITTER)
    } else {
      trackLoginStart(LoginType.TWITTER)
    }
  }}
/>
