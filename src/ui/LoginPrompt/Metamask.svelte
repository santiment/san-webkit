<script lang="ts">
  import { track } from '@/analytics'
  import metamaskSvg from './metamask.svg'
  import metamaskInverseSvg from './metamask-inverse.svg'

  export let onClick: () => Promise<any>

  const hasMetamask = process.browser ? !!window.ethereum : true

  let loading = false
  function onLoginClick() {
    loading = true
    track.event('sign_up', { method: 'metamask' })

    onClick().catch((e) => {
      console.warn(e)
      loading = false
    })
  }
</script>

{#if hasMetamask}
  <div
    class="login btn-1 btn--l"
    class:loading
    on:click={onLoginClick}
    style="--url:url({metamaskInverseSvg})"
  >
    Log in with Metamask
  </div>
{:else}
  <div class="metamask" style="--url:url({metamaskSvg})">
    <h3 class="body-2 txt-m mrg-xs mrg--b">We can't detect Metamask!</h3>
    <p class="mrg-s mrg--b">We can auth you with Metamask account. It's secure and easy.</p>
    <a href="https://metamask.io/#how-it-works" class="link-pointer">How Metamask works?</a>
  </div>
{/if}

<style>
  .metamask {
    background: var(--url) no-repeat 22px 19px, var(--orange-light-1);
    padding: 16px 20px 16px 64px;
    max-width: 344px;
    text-align: left;
  }

  .btn {
    --color: var(--green);
    --color-hover: var(--green-hover);
  }

  .login {
    background: var(--url) no-repeat 10px 50%, #f6851b;
  }
</style>
