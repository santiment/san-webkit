<script>
  import { LoginType, trackLoginStart } from '@/analytics/events/general'
  import Option from './Option.svelte'
</script>

<Option
  {...$$props}
  href="{process.env.BACKEND_URL}/auth/twitter"
  icon="twitter"
  on:click={() => {
    trackLoginStart(LoginType.TWITTER)
  }}
>
  Sign in with Twitter
</Option>
