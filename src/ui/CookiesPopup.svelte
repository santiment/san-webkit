<script lang="ts">
  import Svg from './Svg.svelte'
  import { saveBoolean, getSavedBoolean } from '../utils/localStorage'
  import { track } from '../analytics'

  let className = ''
  export { className as class }

  const COOKIE_POLICY_ACCEPTED = 'COOKIE_POLICY_ACCEPTED'
  let isVisible = !getSavedBoolean(COOKIE_POLICY_ACCEPTED)

  function allow() {
    isVisible = false
    saveBoolean(COOKIE_POLICY_ACCEPTED, true)
    track.event('Cookie policy accepted', { category: 'User' })
  }
</script>

{#if isVisible}
  <div class="cookies border box {className}">
    <Svg illus id="cookies" class="$style.pic" />
    <h2 class="h4 txt-m mrg-l mrg--b">
      We are using cookies to improve your experience
    </h2>
    <h4 class="body-2 mrg-xl mrg--b">
      By clicking “Allow all”, you agree to the storing of cookie and accept our
      <a href="Terms & Conditions" target="_blank" rel="noopener noreferrer"
        >Terms & Conditions.</a
      >
    </h4>
    <button class="btn btn-1" on:click={allow}>Allow all</button>
  </div>
{/if}

<style>
  .cookies {
    position: fixed;
    padding: 24px 16px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    text-align: center;
  }

  :global(body:not(.desktop)) .cookies {
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :global(.desktop) .cookies {
    padding: 32px 54px 32px 150px;
    max-width: 600px;
    right: initial;
    left: 20px;
    bottom: 20px;
    text-align: left;
  }

  h4 {
    color: var(--waterloo);
  }

  a {
    color: var(--accent, var(--green));
  }
  a:hover {
    color: var(--accent-hover, var(--green-hover));
  }

  .pic {
    width: 102px;
    height: 128px;
    transform: rotate(270deg);
  }
  :global(.desktop) .pic {
    transform: initial;
    position: absolute;
    left: 24px;
  }

  button {
    --color: #fff;
    --bg: var(--accent, var(--green));
    --bg-hover: var(--accent-hover, var(--green-hover));
  }
  :global(body:not(.desktop)) button {
    width: 100%;
    padding: 10px;
  }
</style>
