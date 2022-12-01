<script>
  import Options from './index.svelte'

  export let title
</script>

<Options
  {title}
  bottomLabel="Have an account?"
  bottomAction="Log in"
  bottomHref="/login"
  isSignUp
/>
