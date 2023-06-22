<script context="module">export const CookiesStyle = {
  API: 'api-mHGthn',
  SHEETS: 'sheets-Rqj1O3'
};</script>

<script>import { showManageCookiesDialog, COOKIE_POLICY_ACCEPTED, applyCookies } from './../ui/ManageCookiesDialog/index.svelte';
import Svg from './../ui/Svg/svelte';
import { getSavedBoolean } from './../utils/localStorage';
let className = '';
export { className as class };
export let style = '';
export let isVisible = !getSavedBoolean(COOKIE_POLICY_ACCEPTED);

function onAllowAllClick() {
  applyCookies(true, true);
  isVisible = false;
}

function onManageClick() {
  showManageCookiesDialog().then(() => {
    isVisible = false;
  });
}</script>

{#if isVisible}
  <div class="cookies border box {className} {style}">
    <Svg illus id="cookies" class="pic-vToQ8H" />
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

<style >.cookies {
  position: fixed;
  padding: 24px 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
  text-align: center;
}

:global(.api-mHGthn) {
  --fill: #dae0fd;
  --shadow: #5275ff;
}

:global(.sheets-Rqj1O3) {
  --fill: #b0ebdb;
  --shadow: #21b074;
}

a:hover {
  color: var(--accent-hover, var(--green-hover));
}

:global(.pic-vToQ8H) {
  width: 102px;
  height: 128px;
  transform: rotate(270deg);
}

:global(.desktop) .cookies {
  padding: 20px 43px 20px 110px;
  max-width: 450px;
  right: initial;
  left: 20px;
  bottom: 20px;
  text-align: left;
}
:global(.desktop) :global(.pic-vToQ8H) {
  transform: initial;
  position: absolute;
  left: 24px;
  width: 70px;
  height: 88px;
}

:global(body:not(.desktop)) .cookies {
  border-radius: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font: var(--body-2);
}
:global(body:not(.desktop)) h2 {
  font: var(--body-0);
  --margin: 16px;
}
:global(body:not(.desktop)) button {
  width: 100%;
  padding: 10px;
}
:global(body:not(.desktop)) .manage {
  margin: 12px 0 0;
}</style>
