<script lang="ts" context="module">
  export const MOBILE_MENU_LINKS = [
    {
      title: 'Alerts',
      link: '/alerts',
    },
    {
      title: 'Social tool',
      link: '/labs/trends/explore',
    },
    {
      title: 'NFT Influencers',
      link: '/nft',
    },
    {
      title: 'Academy',
      link: 'https://academy.santiment.net/',
    },
    {
      title: 'Pricing',
      link: '/pricing',
    },
  ]
</script>

<script lang="ts">
  import Profile from '@/ui/Profile/svelte'
  import { showIntercom } from '@/analytics/intercom'

  export let user
  export let isMenuOpened
  export let isFullLink

  function onHelpClick() {
    showIntercom()
    isMenuOpened = false
  }

  function getFullLink(link, slug = '') {
    const pathname = link && link.startsWith('/') ? 'https://app.santiment.net' : ''

    return pathname + link + slug
  }
</script>

<nav class="column fluid body-1">
  <section class="column">
    {#each MOBILE_MENU_LINKS as { title, link }}
      {@const href = isFullLink ? getFullLink(link) : link}
      <a {href} on:click={window.__onLinkClick} class="link">
        {title}
      </a>
    {/each}
  </section>

  <div class="divider fluid" />

  <button class="btn-0 link" on:click={onHelpClick}>Help & Feedback</button>

  <section class="column body-2 mrg-a mrg--t">
    {#if user}
      {@const accountLink = isFullLink ? getFullLink('/account') : '/account'}
      <Profile {user} class="$style.profile">
        <svelte:fragment slot="name">
          <div class="mrg-xs mrg--l">
            <div class="txt-m">@{user.username}</div>
            <div class="body-3 c-waterloo">{user.email}</div>
          </div>
        </svelte:fragment>
      </Profile>
      <a href={accountLink} on:click={window.__onLinkClick} class="btn-2 row hv-center">
        Account settings
      </a>
    {:else}
      <a href="/sign-up" on:click={window.__onLinkClick} class="btn-2 sign-up row hv-center">
        Sign up
      </a>
      <a href="/login" on:click={window.__onLinkClick} class="btn-2 row hv-center">Log in</a>
    {/if}
  </section>
</nav>

<style lang="scss">
  nav {
    overflow-y: auto;
    height: calc(100vh - 155px);
    z-index: 100;
    position: fixed;
    margin-top: 73px;
    margin-bottom: 83px;
    padding: 24px 40px 32px;
    background-color: var(--white);
  }

  section {
    gap: 16px;
  }

  .link {
    padding: 7px 0;
  }

  .divider {
    height: 1px;
    background: var(--porcelain);
    margin: 20px 0;
  }

  .profile {
    --img-size: 48px;
  }

  .btn-0 {
    margin-bottom: 40px;
  }

  .btn-2 {
    padding: 8px 0;
  }

  .sign-up {
    --color: var(--green);
    --color-hover: var(--green-hover);

    --border: var(--green);
  }
</style>
