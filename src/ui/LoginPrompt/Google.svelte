<script>
  import Option from './Option.svelte'
</script>

<Option {...$$props} href="{process.env.BACKEND_URL}/auth/google" icon="google">
  Sign in with Google
</Option>
