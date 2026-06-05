<script lang="ts">
  import LoginForm from '$ui/app/LoginForm/index.js'
  import WalletConnect from '$ui/app/LoginForm/WalletConnect.svelte'
</script>

<main class="flex h-screen items-center justify-center">
  <LoginForm title="Sign up" isSignUp>
    <WalletConnect isSignUp={true} onLoginComplete={() => Promise.resolve(undefined)}
    ></WalletConnect>
  </LoginForm>
</main>
