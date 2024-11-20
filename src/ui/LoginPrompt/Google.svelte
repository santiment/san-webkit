<script lang="ts">
  import { page } from '$app/stores'
  import { LoginType, trackAuthStart, trackLoginStart } from '@/analytics/events/general'
  import { trackSignupStart } from '@/analytics/events/onboarding'
  import { getOAuthLink } from '@/utils/auth'
  import Option from './Option.svelte'

  export let from = ''

  $: origin = $page.url.origin
</script>

<Option
  {...$$props}
  title="Google"
  href={getOAuthLink('google', origin, from)}
  icon="google"
  on:click={() => {
    trackAuthStart(LoginType.GOOGLE)

    if ($$props.isSignUp) {
      trackSignupStart(LoginType.GOOGLE)
    } else {
      trackLoginStart(LoginType.GOOGLE)
    }
  }}
/>
