<script context="module" lang="ts">
  export const CookiesStyle = {
    API: '$style.api',
    SHEETS: '$style.sheets',
  } as const

  type CookiesStyle = typeof CookiesStyle
  type CookiesStyles = CookiesStyle[keyof CookiesStyle]
</script>

<script lang="ts">
  import {
    showManageCookiesDialog,
    COOKIE_POLICY_ACCEPTED,
    applyCookies,
  } from '@/ui/ManageCookiesDialog/index.svelte'
  import Svg from '@/ui/Svg/svelte'
  import { getSavedBoolean } from '@/utils/localStorage'
  import { onMount } from 'svelte'

  let className = ''
  export { className as class }
  export let style: '' | CookiesStyles = ''
  export let isVisible = !getSavedBoolean(COOKIE_POLICY_ACCEPTED)

  function onAllowAllClick() {
    applyCookies(true, true)
    isVisible = false
  }

  function onManageClick() {
    showManageCookiesDialog().then(() => {
      isVisible = false
    })
  }

  onMount(() => {
    window.gtag?.('consent' as any, 'default', {
      security_storage: 'granted',
      functionality_storage: 'denied',
      performance_cookies: 'denied',
      analytics_storage: 'granted',

      // Consent v2
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })
  })
</script>

{#if isVisible}
  <div class="cookies border box {className} {style}">
    <Svg illus id="cookies" class="$style.pic" />
    <h2 class="body-2 mrg-s txt-m mrg--b">We are using cookies to improve your experience!</h2>
    <p class="mrg-xl mrg--b c-waterloo">
      By clicking “Allow all”, you agree to use of all cookies. Visit our
      <a href="https://santiment.net/cookies/" target="_blank" rel="noreferrer" class="link-pointer"
        >Cookies Policy</a
      > to learn more.
    </p>
    <button class="btn-1" on:click={onAllowAllClick}>Allow all</button>
    <button class="manage btn-2 mrg-m mrg--l" on:click={onManageClick}>Manage cookies</button>
  </div>
{/if}

<style lang="scss">
  .cookies {
    position: fixed;
    padding: 24px 20px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    text-align: center;
  }

  .api {
    --fill: #dae0fd;
    --shadow: #5275ff;
  }
  .sheets {
    --fill: #b0ebdb;
    --shadow: #21b074;
  }

  a:hover {
    color: var(--accent-hover, var(--green-hover));
  }

  .pic {
    width: 102px;
    height: 128px;
    transform: rotate(270deg);
  }

  :global(.desktop) {
    .cookies {
      padding: 20px 43px 20px 110px;
      max-width: 450px;
      right: initial;
      left: 20px;
      bottom: 20px;
      text-align: left;
    }

    .pic {
      transform: initial;
      position: absolute;
      left: 24px;
      width: 70px;
      height: 88px;
    }
  }

  :global(body:not(.desktop)) {
    .cookies {
      border-radius: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font: var(--body-2);
    }

    h2 {
      font: var(--body-0);
      --margin: 16px;
    }

    button {
      width: 100%;
      padding: 10px;
    }

    .manage {
      margin: 12px 0 0;
    }
  }
</style>
