<script lang="ts" context="module">
  export const MOBILE_NAVBAR_LINKS = [
    {
      title: 'Market',
      icon: 'market',
      href: '/assets',
    },
    {
      title: 'Chart',
      icon: 'chart',
      href: '/projects',
      slug: '/bitcoin',
    },
    {
      title: 'Watchlist',
      icon: 'watchlist',
      href: '/watchlists',
    },
    {
      title: 'Insights',
      icon: 'insights',
      href: '/insights',
    },
  ]
</script>

<script lang="ts">
  import Menu from './Menu.svelte'
  import NavItem from './NavItem.svelte'

  export let user: SAN.Author | undefined
  export let path = ''
  export let isFullLink = false
  export let links = MOBILE_NAVBAR_LINKS
  export let isMenuOpened = false

  $: isMenuOpened = (path, false)

  function onMenuClick() {
    isMenuOpened = !isMenuOpened
  }
</script>

{#if isMenuOpened}
  <Menu {user} {isFullLink} bind:isMenuOpened />
{/if}

<nav class="fluid row justify v-center">
  {#each links as link}
    {@const { href, slug = '' } = link}
    <NavItem
      {...link}
      href={href + slug}
      active={!isMenuOpened && path.startsWith(link.href)}
      on:click={window.__onLinkClick}
    />
  {/each}

  <NavItem
    tag="button"
    title="Menu"
    icon="mobile-menu"
    active={isMenuOpened}
    on:click={onMenuClick}
  />
</nav>

<style>
  nav {
    z-index: 98;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px 20px;
    background: var(--whale);
    border-top: 1px solid var(--athens);
  }
</style>
