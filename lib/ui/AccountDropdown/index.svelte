<script>import { SANBASE_ORIGIN } from './../../utils/links';
import { getUserSubscriptionInfo } from './../../utils/subscription';
import { trackLogout } from './../../analytics/events/general';
import Toggle from './../../ui/Toggle.svelte';
import Tooltip from './../../ui/Tooltip/svelte';
import Svg from './../../ui/Svg/svelte';
import Pic from './../../ui/Profile/Pic.svelte';
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
import UserInfo from './UserInfo.svelte';
import VersionInfo from './VersionInfo.svelte';
export let ui;
export let currentUser;
export let onLogoutClick;
export let isOpened = false;
export let tooltipClass = '';
export let variant = AccountStatusType.First;
export let subscription;
export let customerData = {};
export let isAppUpdateAvailable = false;
export let version = '1.0.0';
export let isShowingFollowers = true;

function onLogout() {
  isOpened = false;
  trackLogout();
  onLogoutClick();
}

$: subscriptionInfo = getUserSubscriptionInfo(customerData, subscription);

$: isPro = subscriptionInfo.userPlanName && subscriptionInfo.trialDaysLeft === 0;</script>

<Tooltip
  duration={130}
  align="center"
  bind:isOpened
  activeClass="active-_VrAxA"
  class={tooltipClass}
>
  <svelte:fragment slot="trigger">
    <a
      href={`${SANBASE_ORIGIN}/profile/${currentUser ? currentUser.id : ''}`}
      on:click={window.__onLinkClick}
      class:pro={isPro}
    >
      <Pic class="btn mrg-m mrg--l box-2HQbzT" src={currentUser ? currentUser.avatarUrl : ''} />
    </a>
  </svelte:fragment>

  <div class="tooltip" slot="tooltip">
    {#if currentUser}
      <UserInfo user={currentUser} {subscriptionInfo} {variant} {isShowingFollowers} />

      <hr />
      <VersionInfo {isAppUpdateAvailable} {version} />
      <hr />

      <section>
        <a
          class="btn-ghost row justify v-center"
          href="${SANBASE_ORIGIN}/alerts?tab=1"
          on:click={window.__onLinkClick}>My alerts</a
        >
        <a
          class="btn-ghost row justify v-center"
          href="${SANBASE_ORIGIN}/watchlists"
          on:click={window.__onLinkClick}>My watchlists</a
        >
        <a
          class="btn-ghost row justify v-center"
          href="https://insights.santiment.net/my"
          on:click={window.__onLinkClick}>My insights</a
        >
        <a
          href="https://insights.santiment.net/new"
          class="write btn-1 btn--s"
          on:click={window.__onLinkClick}>Write insight</a
        >
      </section>

      <hr />
    {/if}

    <section>
      {#if !currentUser}
        <a
          href="/login"
          class="login btn-ghost row justify v-center"
          on:click={window.__onLinkClick}
        >
          <Svg id="user" w="16" class="mrg-s mrg--r" />
          Log in
        </a>
      {/if}

      <button class="btn-ghost row justify v-center" on:click={ui.toggleNightMode}>
        Night mode
        <Toggle isActive={$ui.nightMode} />
      </button>

      <a
        href="${SANBASE_ORIGIN}/labs"
        class="btn-ghost row justify v-center"
        on:click={window.__onLinkClick}>Labs</a
      >

      {#if currentUser}
        <a
          href="${SANBASE_ORIGIN}/account"
          class="btn-ghost row justify v-center"
          on:click={window.__onLinkClick}>Account Settings</a
        >
      {/if}

      <button
        class="btn-ghost row justify v-center"
        on:click={() => window.Intercom && window.Intercom('show')}
      >
        Contact us
      </button>

      {#if currentUser}
        <button class="btn-ghost row justify v-center logout" on:click={onLogout}>
          <Svg id="logout" w="16" class="mrg-s mrg--r" /> Logout
        </button>
      {/if}
    </section>
  </div>
</Tooltip>

<style>
  :global(.active-_VrAxA) :global(.box-2HQbzT) {
    box-shadow: inset 0px 0px 0px 1px var(--green);
  }

  .pro :global(.box-2HQbzT) {
    --green: var(--orange-hover);
  }

  hr {
    background: var(--porcelain);
    height: 1px;
    border: none;
  }

  button {
    width: 100%;
  }

  .write {
    display: inline-block;
    margin: 6px 0 0 8px;
  }

  .tooltip {
    width: 260px;
  }

  section {
    padding: 8px;
  }

  .login {
    --color: var(--green);
    justify-content: start;
  }

  .logout {
    --fill: var(--waterloo);
    --fill-hover: var(--red-hover);
    --color-hover: var(--red-hover);
    justify-content: initial;
  }
</style>
