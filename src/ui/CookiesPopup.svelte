<script lang="ts">
  import {
    showManageCookiesDialog,
    COOKIE_POLICY_ACCEPTED,
    applyCookies,
  } from '@/ui/ManageCookiesDialog/index.svelte'
  import Svg from '@/ui/Svg/svelte'
  import { getSavedBoolean } from '@/utils/localStorage'

  let className = ''
  export { className as class }

  let isVisible = !getSavedBoolean(COOKIE_POLICY_ACCEPTED)

  function onAllowAllClick() {
    isVisible = false
    applyCookies(true, true)
  }

  function onManageClick() {
    isVisible = false
    showManageCookiesDialog()
  }
</script>

{#if isVisible}
  <div class="cookies border box {className}">
    <Svg illus id="cookies" class="$style.pic" />
    <h2 class="body-2 txt-m mrg-s mrg--b">We are using cookies to improve your experience!</h2>
    <h4 class="body-3 mrg-xl mrg--b c-waterloo">
      By clicking “Allow all”, you agree to use of all cookies. Visit our
      <a href="https://santiment.net/cookies/" target="_blank" class="c-accent">Cookies Policy</a> to
      learn more.
    </h4>
    <button class="btn-1" on:click={onAllowAllClick}>Allow all</button>
    <button class="manage btn-2 mrg-m mrg--l" on:click={onManageClick}>Manage cookies</button>
  </div>
{/if}

<style lang="scss">
  .cookies {
    position: fixed;
    padding: 24px 16px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    text-align: center;
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
