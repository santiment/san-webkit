<script>
import { get } from 'svelte/store'
  import { page } from '$app/stores'
import { LoginType, trackAuthStart, trackLoginStart } from './../../analytics/events/general';
import { trackSignupStart } from './../../analytics/events/onboarding';
import { getOAuthLink } from './../../utils/auth';
import Option from './Option.svelte';
export let from = '';

const origin = get(page).url.origin
</script>

<Option
  {...$$props}
  title="Twitter"
  href={getOAuthLink('twitter', origin, from)}
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
