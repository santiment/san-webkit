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
  ] as {
    title: string
    icon: string
    href: string
    slug?: string
    strict?: true
  }[]
</script>

<script lang="ts">
  import Menu from './Menu.svelte'
  import NavItem from './NavItem.svelte'

  export let user: SAN.Author | null | undefined
  export let path = ''
  export let isFullLink = false
  export let links = MOBILE_NAVBAR_LINKS
  export let isMenuOpened = false

  $: isMenuOpened = (path, false)

  $: if (process.browser) {
    if (isMenuOpened) {
      document.body.style.width = document.body.offsetWidth + 'px'
      document.body.style.overflowY = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.width = ''
      document.body.style.overflowY = ''
      document.body.style.touchAction = ''
    }
  }

  function onMenuClick() {
    isMenuOpened = !isMenuOpened
  }
</script>

{#if isMenuOpened}
  <Menu {user} {isFullLink} bind:isMenuOpened>
    <slot name="menu-bottom" slot="bottom" />
  </Menu>
{/if}

<nav class="fluid row justify v-center">
  {#each links as link}
    {@const { href, slug = '', strict } = link}
    <NavItem
      {...link}
      href={href + slug}
      active={!isMenuOpened && (strict ? path === href : path.startsWith(href))}
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
    z-index: 101;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px 20px;
    background: var(--whale);
    border-top: 1px solid var(--athens);
  }
</style>
