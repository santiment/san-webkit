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

  function onLogout() {
    isOpened = false
    onLogoutClick()
  }
</script>

<Tooltip duration={130} activeClass="$style.active" align="center" bind:isOpened>
  <svelte:fragment slot="trigger">
    <Pic class="btn mrg-m mrg--l $style.pic" />
  </svelte:fragment>

  <div class="tooltip" slot="tooltip">
    {#if currentUser}
      <UserInfo user={currentUser} />

      <hr />

      <section>
        <a class="btn-ghost" href="https://app.santiment.net/alerts?tab=1">My signals</a>
        <a class="btn-ghost" href="https://app.santiment.net/assets">My watchlists</a>
        <a class="btn-ghost" href="/my">My insights</a>
        <a href="/new" class="write btn-1 btn--s">Write insight</a>
      </section>
      <hr />
    {/if}

    <section>
      <div class="btn-ghost" on:click={ui.toggleNightMode}>
        Night mode
        <Toggle isActive={$ui.nightMode} />
      </div>

      {#if currentUser}
        <a href="https://app.santiment.net/labs" class="btn-ghost">Labs</a>
        <a href="https://app.santiment.net/account" class="btn-ghost">Account Settings</a>
        <div class="btn-ghost" on:click={() => window.Intercom && window.Intercom('show')}>
          Contact us
        </div>
        <div class="btn-ghost logout" on:click={onLogout}>
          <Svg id="logout" w="16" class="mrg-s mrg--r" /> Logout
        </div>
      {:else}
        <a href="/login" class="btn-ghost">Login</a>
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
