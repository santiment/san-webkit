<script lang="ts" context="module">
  export const MOBILE_NAVBAR_LINKS = [
    {
      title: 'Market',
      icon: 'market',
      link: '/assets',
    },
    {
      title: 'Chart',
      icon: 'chart',
      link: '/projects',
      slug: '/bitcoin',
    },
    {
      title: 'Watchlist',
      icon: 'watchlist',
      link: '/watchlists',
    },
    {
      title: 'Insights',
      icon: 'insights',
      link: '/insights',
    },
    {
      title: 'Menu',
      icon: 'mobile-menu',
      isMenuNav: true,
    },
  ]
</script>

<script lang="ts">
  import Menu, { getFullLink } from './Menu.svelte'
  import NavItem from './NavItem.svelte'

  export let user: SAN.Author & { name?: string }
  export let path = ''
  export let isFullLink = false

  let isMenuOpened = false

  function onMenuClick(event, isMenuNav) {
    event.preventDefault()

    if (isMenuNav) isMenuOpened = !isMenuOpened

    if (!isMenuNav) {
      window.__onLinkClick(event)
      isMenuOpened = false
    }
  }
</script>

{#if isMenuOpened}
  <Menu {user} {isFullLink} bind:isMenuOpened />
{/if}

<nav class="fluid">
  <ul class="row justify v-center">
    {#each MOBILE_NAVBAR_LINKS as { title, icon, link, slug = '', isMenuNav }}
      {@const href = isFullLink ? getFullLink(link, slug) : link + slug}
      {@const active = isMenuNav ? isMenuOpened : path.includes(link)}
      <li>
        <NavItem {title} {icon} {href} {active} on:click={(e) => onMenuClick(e, isMenuNav)} />
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px 20px;
    background: var(--whale);
    border-top: 1px solid var(--athens);
  }

  ul {
    list-style-type: none;
  }
</style>
