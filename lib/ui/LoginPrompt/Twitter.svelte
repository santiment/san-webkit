<script>import { LoginType, trackLoginStart } from './../../analytics/events/general';
import { trackSignupStart } from './../../analytics/events/onboarding';
import Option from './Option.svelte';</script>

<Option
  {...$$props}
  title="Twitter"
  href="{process.env.BACKEND_URL}/auth/twitter"
  icon="twitter"
  on:click={() => {
    if ($$props.isSignUp) {
      trackSignupStart(LoginType.TWITTER)
    } else {
      trackLoginStart(LoginType.TWITTER)
    }
  }}
/>
