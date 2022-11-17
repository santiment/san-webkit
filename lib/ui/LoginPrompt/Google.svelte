<script>import { LoginType, trackLoginStart } from './../../analytics/events/general';
import Option from './Option.svelte';</script>

<Option
  {...$$props}
  href="{process.env.BACKEND_URL}/auth/google"
  icon="google"
  on:click={() => {
    trackLoginStart(LoginType.GOOGLE)
  }}
>
  Sign in with Google
</Option>
