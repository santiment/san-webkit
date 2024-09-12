<script>import { SANBASE_ORIGIN } from './../../utils/links';
import { trackLogout } from './../../analytics/events/general';
import { getUI$Ctx } from './../../stores/ui';
import { getCustomer$Ctx } from './../../stores/customer';
import Toggle from './../../ui/Toggle.svelte';
// import Tooltip from './../../ui/Tooltip'
import Tooltip from './../../ui/Tooltip';
import Svg from './../../ui/Svg/svelte';
import Pic from './../../ui/Profile/Pic.svelte';
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
import UserInfo from './UserInfo.svelte';
import VersionInfo from './VersionInfo.svelte';
import LiteButton from './LiteButton.svelte';
export let currentUser;
export let onLogoutClick;
export let isOpened = false;
export let tooltipClass = '';
export let variant = AccountStatusType.First;
export let isAppUpdateAvailable = false;
export let version = '1.0.0';
export let isShowingFollowers = true;
export let onOldVersionClick = undefined;
const { ui$ } = getUI$Ctx();
const { customer$ } = getCustomer$Ctx();
const REFERRAL_ANNOUNCEMENT_URL = 'https://medium.com/santiment/santiment-is-proud-to-announce-the-relaunch-of-our-referral-program-now-with-increased-commission-e8b7feb5606c';
function onLogout() {
    isOpened = false;
    trackLogout();
    onLogoutClick();
}
$: customer = $customer$;
$: ({ isPro } = customer);
$: ({ isLiteVersion } = $ui$);
</script>

<Tooltip
  position="bottom"
  overflowFlip={false}
  duration={130}
  bind:isOpened
  activeClass="active-iO_dFS"
  class={tooltipClass}
  let:trigger
>
  <slot {trigger}>
    <a
      use:trigger
      href="{SANBASE_ORIGIN}/{currentUser ? `profile/${currentUser.id}` : 'sign-up'}"
      aria-label="Profile page"
      on:click={window.__onLinkClick}
      class:pro={isPro}
    >
      <Pic class="btn mrg-m mrg--l s-1avxx44" src={currentUser ? currentUser.avatarUrl : ''} />
    </a>
  </slot>

  <div class="tooltip" slot="tooltip">
    {#if currentUser}
      <UserInfo user={currentUser} {variant} {isShowingFollowers} />

      <hr />
      <VersionInfo {isAppUpdateAvailable} {version} />
      <hr />

      {#if isLiteVersion && onOldVersionClick}
        <LiteButton {onOldVersionClick} />
        <hr />
      {/if}

      <section>
        <a
          class="btn-ghost row justify v-center"
          href="{SANBASE_ORIGIN}/alerts?tab=1"
          on:click={window.__onLinkClick}>My alerts</a
        >
        <a
          class="btn-ghost row justify v-center"
          href="{SANBASE_ORIGIN}/watchlists"
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

        {#if isLiteVersion && onOldVersionClick}
          <anon-classic-section>
            <hr />
            <LiteButton {onOldVersionClick} />
            <hr />
          </anon-classic-section>
        {/if}
      {/if}

      <button class="btn-ghost row justify v-center" on:click={ui$.toggleNightMode}>
        Night mode
        <Toggle isActive={$ui$.isNightMode} />
      </button>

      {#if currentUser}
        <a
          href="{SANBASE_ORIGIN}/account"
          class="btn-ghost row justify v-center"
          on:click={window.__onLinkClick}
        >
          Account Settings
        </a>
      {/if}

      <a
        href={currentUser ? `${SANBASE_ORIGIN}/account#affiliate` : REFERRAL_ANNOUNCEMENT_URL}
        target={currentUser ? '_self' : '_blank'}
        class="btn-ghost row gap-s v-center"
        style:fill="var(--orange)"
        on:click={window.__onLinkClick}
      >
        Referral Program
        <Svg id="sparkle" w="12" />
      </a>

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
  :global(.active-iO_dFS) :global(.s-1avxx44) {
    --img-fill: var(--fiord);
  }

  .pro :global(.s-1avxx44) {
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

  anon-classic-section {
    display: block;
    padding: 8px 0;
    margin: 0 -8px;
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
