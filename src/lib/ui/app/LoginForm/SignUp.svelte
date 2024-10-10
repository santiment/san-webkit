<script lang="ts">
  import LoginForm from './index.svelte'

  export let title
</script>

<LoginForm
  {title}
  bottomLabel="Have an account?"
  bottomAction="Log in"
  bottomHref="/login"
  isSignUp
/>
