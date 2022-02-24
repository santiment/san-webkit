<script>
  import Option from './Option.svelte'
</script>

<Option {...$$props} href="{process.env.BACKEND_URL}/auth/twitter" icon="twitter">
  Sign in with Twitter
</Option>
