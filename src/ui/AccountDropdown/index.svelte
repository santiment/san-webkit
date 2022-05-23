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
      {:else}
        <a href="/login" class="btn-ghost" on:click={window.__onLinkClick}>Create an account</a>
      {/if}
    </section>
  </div>
</Tooltip>

<style>
  .pic {
    --img-bg: var(--green-light-1);
    --img-fill: var(--green);
  }

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

  .logout {
    --color: var(--red);
    --color-hover: var(--red-hover);
    justify-content: initial;
  }
</style>
