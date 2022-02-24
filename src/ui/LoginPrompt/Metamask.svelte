<script>
  // import { goto } from '@sapper/app'
  // import { startEthLoginFlow } from '@/flow/login'
  import { track } from '../../analytics'

  export let onMetamaskClick

  const hasMetamask = process.browser ? !!window.ethereum : true

  let loading = false
  function onClick() {
    loading = true
    track.event('sign_up', { method: 'metamask' })

    onMetamaskClick().catch((e) => {
      console.warn(e)
      loading = false
    })

    /*
    startEthLoginFlow()
      .then(() => {
        // goto(getPostponedPaymentInsight() || '/')
      })
      .catch((e) => {
        console.warn(e)
        loading = false
      })
      */
  }
</script>

{#if hasMetamask}
  <div class="login btn-1 btn--l" class:loading on:click={onClick}>Log in with Metamask</div>
{:else}
  <div class="metamask">
    <h3 class="body-2 txt-m mrg-xs mrg--b">We can't detect Metamask!</h3>
    <p class="mrg-s mrg--b">We can auth you with Metamask account. It's secure and easy.</p>
    <a href="https://metamask.io/#how-it-works" class="btn">How Metamask works?</a>
  </div>
{/if}

<style>
  .metamask {
    background: url('/metamask.svg') no-repeat 22px 19px, var(--orange-light-1);
    padding: 16px 20px 16px 64px;
    max-width: 344px;
    text-align: left;
  }

  .btn {
    --color: var(--green);
    --color-hover: var(--green-hover);
  }

  .login {
    background: url('/metamask-inverse.svg') no-repeat 10px 50%, #f6851b;
  }
</style>
