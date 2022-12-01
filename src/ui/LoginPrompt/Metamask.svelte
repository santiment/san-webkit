<script lang="ts">
  import { LoginType, trackLoginStart } from '@/analytics/events/general'
  import { trackSignupStart } from '@/analytics/events/onboarding'
  import Option from './Option.svelte'

  export let isSignUp = false
  export let onClick: () => Promise<any>

  const hasMetamask = process.browser ? !!window.ethereum : true

  let loading = false
  function onLoginClick() {
    loading = true

    if (isSignUp) {
      trackSignupStart(LoginType.METAMASK)
    } else {
      trackLoginStart(LoginType.METAMASK)
    }

    onClick().catch((e) => {
      console.warn(e)
      loading = false
    })
  }
</script>

{#if hasMetamask}
  <Option
    tag="button"
    title="Metamask"
    {loading}
    on:click={onLoginClick}
    icon="metamask"
    {isSignUp}
  />
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
</style>
