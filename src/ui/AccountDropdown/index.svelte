<script lang="ts">
  import type { CustomerData } from '@/stores/user'
  import { getUserSubscriptionInfo } from '@/utils/subscription'
  import Toggle from '@/ui/Toggle.svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import Svg from '@/ui/Svg/svelte'
  import Pic from '@/ui/Profile/Pic.svelte'
  import UserInfo from './UserInfo.svelte'
  import VersionInfo from './VersionInfo.svelte'
  import { AccountStatusType } from '@/ui/AccountStatus.svelte'

  export let ui: any
  export let currentUser
  export let onLogoutClick
  export let isOpened = false
  export let tooltipClass = ''
  export let variant = AccountStatusType.First
  export let subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>
  export let customerData = {} as Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>
  export let isAppUpdateAvailable = false
  export let version: string = '1.0.0'
  export let linkProfilePic = false

  function onLogout() {
    isOpened = false
    onLogoutClick()
  }

  $: subscriptionInfo = getUserSubscriptionInfo(customerData, subscription)
  $: isPro = subscriptionInfo.userPlanName && subscriptionInfo.trialDaysLeft === 0
</script>

<Tooltip
  duration={130}
  activeClass={isPro ? '$style.activePro' : '$style.active'}
  align="center"
  bind:isOpened
  class={tooltipClass}>
  <svelte:fragment slot="trigger">
    {#if linkProfilePic}
      <a href={`/profile/${currentUser ? currentUser.id : ''}`} on:click={window.__onLinkClick}>
        <Pic class="btn mrg-m mrg--l" src={currentUser ? currentUser.avatarUrl : ''} />
      </a>
    {:else}
      <Pic class="btn mrg-m mrg--l" src={currentUser ? currentUser.avatarUrl : ''} />
    {/if}
  </svelte:fragment>

  <div class="tooltip" slot="tooltip">
    {#if currentUser}
      <UserInfo user={currentUser} {subscriptionInfo} {variant} />

      <hr />
      <VersionInfo {isAppUpdateAvailable} {version} />
      <hr />

      <section>
        <a
          class="btn-ghost row justify v-center"
          href="/alerts?tab=1"
          on:click={window.__onLinkClick}>My alerts</a>
        <a class="btn-ghost row justify v-center" href="t/assets" on:click={window.__onLinkClick}
          >My watchlists</a>
        <a
          class="btn-ghost row justify v-center"
          href="https://insights.santiment.net/my"
          on:click={window.__onLinkClick}>My insights</a>
        <a
          href="https://insights.santiment.net/new"
          class="write btn-1 btn--s"
          on:click={window.__onLinkClick}>Write insight</a>
      </section>

      <hr />
    {/if}

    <section>
      {#if !currentUser}
        <a
          href="/login"
          class="login btn-ghost row justify v-center"
          on:click={window.__onLinkClick}>
          <Svg id="user" w="16" class="mrg-s mrg--r" />
          Log in
        </a>
      {/if}

      <div class="btn-ghost row justify v-center" on:click={ui.toggleNightMode}>
        Night mode
        <Toggle isActive={$ui.nightMode} />
      </div>

      <a href="/labs" class="btn-ghost row justify v-center" on:click={window.__onLinkClick}
        >Labs</a>

      {#if currentUser}
        <a href="/account" class="btn-ghost row justify v-center" on:click={window.__onLinkClick}
          >Account Settings</a>
      {/if}

      <div
        class="btn-ghost row justify v-center"
        on:click={() => window.Intercom && window.Intercom('show')}>
        Contact us
      </div>

      {#if currentUser}
        <div class="btn-ghost row justify v-center logout" on:click={onLogout}>
          <Svg id="logout" w="16" class="mrg-s mrg--r" /> Logout
        </div>
      {/if}
    </section>
  </div>
</Tooltip>

<style>
  .active {
    box-shadow: inset 0px 0px 0px 1px var(--green);
  }

  .activePro {
    box-shadow: inset 0px 0px 0px 1px var(--orange-hover);
  }

  hr {
    background: var(--porcelain);
    height: 1px;
    border: none;
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
