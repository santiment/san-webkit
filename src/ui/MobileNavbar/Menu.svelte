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

  export function getFullLink(link, slug = '') {
    const pathname = link && link.startsWith('/') ? 'https://app.santiment.net' : ''

    return pathname + link + slug
  }
</script>

<script lang="ts">
  import Profile from '@/ui/Profile/svelte'
  import { showIntercom } from '@/analytics/intercom'
  import { customerData$ } from '@/stores/user'

  export let user
  export let isMenuOpened
  export let isFullLink

  $: ({ isLoggedIn } = $customerData$)

  function onLinkClick(event) {
    event.preventDefault()
    window.__onLinkClick(event)
    isMenuOpened = false
  }

  function onHelpClick() {
    showIntercom()
    isMenuOpened = false
  }
</script>

<section class="fluid column">
  <nav class="column">
    <ul>
      {#each MOBILE_MENU_LINKS as { title, link }}
        {@const href = isFullLink ? getFullLink(link) : link}
        <li class="link body-1">
          <a {href} on:click={onLinkClick}>
            {title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="divider fluid mrg-l mrg--t mrg--b" />
  <button class="btn-0 link body-1 mrg-l mrg--b" on:click={onHelpClick}>Help & Feedback</button>
  {#if isLoggedIn}
    {@const accountLink = isFullLink ? getFullLink('/account') : '/account'}
    <div class="column body-2 mrg-a mrg--t">
      <Profile {user} class="mrg-l mrg--b">
        <svelte:fragment slot="name">
          <div>
            <div class="txt-m">@{user.username}</div>
            <div class="body-3 c-waterloo">{user.email}</div>
          </div>
        </svelte:fragment>
      </Profile>
      <a href={accountLink} on:click={onLinkClick} class="btn-2 row hv-center">Account settings</a>
    </div>
  {:else}
    <div class="column body-2 mrg-a mrg--t">
      <a href="/sign-up" on:click={onLinkClick} class="btn-2 row hv-center mrg-l mrg--b">Sign up</a>
      <a href="/login" on:click={onLinkClick} class="btn-2 row hv-center">Log in</a>
    </div>
  {/if}
</section>

<style lang="scss">
  section {
    overflow-y: auto;
    height: calc(100vh - 155px);
    z-index: 100;
    position: fixed;
    margin-top: 73px;
    margin-bottom: 83px;
    padding: 24px 40px 32px;
    background-color: var(--white);
  }

  nav {
    gap: 16px;
  }

  ul {
    list-style-type: none;
  }

  .link {
    padding: 7px 0;
  }

  .divider {
    min-height: 1px;
    background-color: var(--porcelain);
  }

  .btn-2 {
    padding: 8px 0;

    &:first-of-type {
      --color: var(--green);
      --color-hover: var(--green-hover);

      border-color: var(--green);
    }
  }
</style>
