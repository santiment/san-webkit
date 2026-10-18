<script lang="ts">
  import LoginForm from './index.svelte'

  const { title }: { title: string } = $props()
</script>

<LoginForm
  {title}
  bottomLabel="Have an account?"
  bottomAction="Log in"
  bottomHref="/login"
  isSignUp
/>
