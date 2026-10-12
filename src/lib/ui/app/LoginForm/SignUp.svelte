<script lang="ts">
  import LoginForm from './index.svelte'

  const { title, confirmationClass }: { title: string; confirmationClass?: string } = $props()
</script>

<LoginForm
  {title}
  {confirmationClass}
  bottomLabel="Have an account?"
  bottomAction="Log in"
  bottomHref="/login"
  isSignUp
/>
