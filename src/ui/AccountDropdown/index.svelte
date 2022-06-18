<script lang="ts">
  import Toggle from '@/ui/Toggle.svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import Svg from '@/ui/Svg/svelte'
  import Pic from '@/ui/Profile/Pic.svelte'
  import UserInfo from './UserInfo.svelte'

  export let ui: any
  export let currentUser
  export let onLogoutClick
  export let isOpened = false
  export let tooltipClass = ''
  export let isAppUpdateAvailable = false
  export let version: string = '1.0.0'

  function onLogout() {
    isOpened = false
    onLogoutClick()
  }
</script>

<Tooltip
  duration={130}
  activeClass="$style.active"
  align="center"
  bind:isOpened
  class={tooltipClass}
>
  <svelte:fragment slot="trigger">
    <Pic class="btn mrg-m mrg--l $style.pic" src={currentUser ? currentUser.avatarUrl : ''} />
  </svelte:fragment>

  <div class="tooltip" slot="tooltip">
    {#if currentUser}
      <UserInfo user={currentUser} />

      <hr />

      <section>
        {#if isAppUpdateAvailable}
          <button class="btn-ghost fluid" on:click={() => window.location.reload()}>
            Update available. Restart now
          </button>
        {:else}
          <div class="latest caption">
            You have the latest version!
            <div class="c-waterloo">{version}</div>
          </div>
        {/if}
      </section>

      <hr />

      <section>
        <a
          class="btn-ghost"
          href="https://app.santiment.net/alerts?tab=1"
          on:click={window.__onLinkClick}>My alerts</a
        >
        <a class="btn-ghost" href="https://app.santiment.net/assets" on:click={window.__onLinkClick}
          >My watchlists</a
        >
        <a
          class="btn-ghost"
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
    {:else}
      <section>
        <a href="/login" class="login btn-ghost" on:click={window.__onLinkClick}>
          <Svg id="user" w="16" class="mrg-s mrg--r" />
          Log in
        </a>
      </section>
    {/if}

    <section>
      <div class="btn-ghost" on:click={ui.toggleNightMode}>
        Night mode
        <Toggle isActive={$ui.nightMode} />
      </div>

      <a href="https://app.santiment.net/labs" class="btn-ghost" on:click={window.__onLinkClick}
        >Labs</a
      >

      {#if currentUser}
        <a
          href="https://app.santiment.net/account"
          class="btn-ghost"
          on:click={window.__onLinkClick}>Account Settings</a
        >
      {/if}

      <div class="btn-ghost" on:click={() => window.Intercom && window.Intercom('show')}>
        Contact us
      </div>

      {#if currentUser}
        <div class="btn-ghost logout" on:click={onLogout}>
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

  hr {
    background: var(--porcelain);
    height: 1px;
    border: none;
  }

  .write {
    display: inline-block;
    margin: 6px 0 0 8px;
  }

  .btn-ghost {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .latest {
    padding: 2px 8px;
  }

  .logout {
    --fill: var(--waterloo);
    --fill-hover: var(--red-hover);
    --color-hover: var(--red-hover);
    justify-content: initial;
  }
</style>
