<script lang="ts">
  import LoginForm from '$ui/app/LoginForm/index.js'
  import WalletConnect from '$ui/app/LoginForm/WalletConnect.svelte'

  const { isSignUp = false }: { isSignUp?: boolean } = $props()
</script>

<main class="flex h-screen items-center justify-center">
  <LoginForm {isSignUp}>
    <WalletConnect {isSignUp} onLoginComplete={() => Promise.resolve(undefined)}></WalletConnect>
  </LoginForm>
</main>
