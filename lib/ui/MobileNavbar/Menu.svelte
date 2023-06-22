<script context="module">export const MOBILE_MENU_LINKS = [{
  title: 'Alerts',
  link: '/alerts'
}, {
  title: 'Social tool',
  link: '/labs/trends/explore'
}, {
  title: 'NFT Influencers',
  link: '/nft'
}, {
  title: 'Academy',
  link: 'https://academy.santiment.net/'
}, {
  title: 'Pricing',
  link: '/pricing'
}];</script>

<script>import { SANBASE_ORIGIN } from './../../utils/links';
import Svg from './../../ui/Svg/svelte';
import Profile from './../../ui/Profile/svelte';
import { showIntercom } from './../../analytics/intercom';
import { getCustomer$Ctx } from './../../stores/customer';
export let user;
export let isMenuOpened;
export let isFullLink;
const {
  customer$
} = getCustomer$Ctx();

$: ({
  isPro
} = $customer$);

function onHelpClick() {
  showIntercom();
  isMenuOpened = false;
}

function getFullLink(link, slug = '') {
  const pathname = link && link.startsWith('/') ? SANBASE_ORIGIN : '';
  return pathname + link + slug;
}

function adjustHeight(node) {
  const headerNode = document.querySelector('#mobile-header');

  if (headerNode) {
    node.style.top = headerNode.clientHeight + 1 + 'px';
  }
}</script>

<nav class="column fluid body-1" use:adjustHeight>
  <section class="links column">
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

      <Profile
        {user}
        class="profile-Yc5vPF txt-m relative"
        feature="profile"
        source="mobile-nav-menu"
        placeholderSize={24}
      >
        {#if user.username && user.email}
          <div class="body-3 txt-r c-waterloo">{user.email}</div>
        {/if}

        {#if isPro}
          <crown class="row hv-center"><Svg id="crown" w="12" /></crown>
        {/if}
      </Profile>

      <a href={accountLink} on:click={window.__onLinkClick} class="btn-2 row hv-center">
        Account settings
      </a>

      {#if !isPro}
        <a href="/pricing" class="btn-1 btn--orange btn--s row hv-center">
          <Svg id="crown" w="12" class="mrg-s mrg--r" />
          Upgrade
        </a>
      {/if}
    {:else}
      <a href="/sign-up" on:click={window.__onLinkClick} class="btn-2 sign-up row hv-center">
        Sign up
      </a>
      <a href="/login" on:click={window.__onLinkClick} class="btn-2 row hv-center">Log in</a>
    {/if}
  </section>
</nav>

<style >nav {
  z-index: 101;
  position: fixed;
  top: 0;
  bottom: 83px;
  padding: 0 32px 16px;
  background: var(--white);
}

section {
  gap: 16px;
}

.link {
  padding: 7px 0;
}

.divider {
  height: 1px;
  min-height: 1px;
  background: var(--porcelain);
  margin: 20px 0;
}

:global(.profile-Yc5vPF) {
  --img-size: 48px;
}

.btn-0 {
  margin-bottom: 32px;
}

.btn-2,
.btn-1 {
  padding: 8px 0;
}

.links {
  overflow: auto;
  padding-top: 12px;
}

.sign-up {
  --color: var(--green);
  --color-hover: var(--green-hover);
  --border: var(--green);
}

crown {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  fill: var(--orange);
  background-color: var(--orange-light-2);
  top: 24px;
  left: 24px;
}</style>
