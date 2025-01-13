<script context="module">export const MOBILE_MENU_LINKS = [
    {
        title: 'Alerts',
        link: '/alerts',
    },
    {
        title: 'Social Trends',
        link: '/social-trends',
    },
    {
        title: 'Academy',
        link: 'https://academy.santiment.net/',
    },
    {
        title: 'Pricing',
        link: '/pricing',
    },
];
</script>

<script>import { SANBASE_ORIGIN } from './../../utils/links';
import Account from './Account.svelte';
import { showIntercom } from './../../analytics/intercom';
let className = '';
export { className as class };
export let user;
export let isMenuOpened;
export let isFullLink;
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
}
</script>

<nav class="column fluid body-1 {className}" use:adjustHeight>
  <slot {user} {onHelpClick} linkClass="link-awLT9U" dividerClass="divider-cq_Y+L">
    <section class="links column gap-l">
      {#each MOBILE_MENU_LINKS as { title, link }}
        {@const href = isFullLink ? getFullLink(link) : link}
        <a {href} on:click={window.__onLinkClick} class="link-awLT9U">
          {title}
        </a>
      {/each}
    </section>

    <div class="divider-cq_Y+L fluid" />

    <button class="btn-0 link-awLT9U" on:click={onHelpClick}>Help & Feedback</button>

    <Account class="mrg-a mrg--t" {user} {isFullLink} />

    <slot name="bottom" />
  </slot>
</nav>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
nav {
  z-index: 101;
  position: fixed;
  top: 0;
  bottom: var(--mobile-menu-bottom, 83px);
  padding: 0 32px 16px;
  background: var(--white);
}

:global(.link-awLT9U) {
  padding: 7px 0;
}

:global(.divider-cq_Y\+L) {
  height: 1px;
  min-height: 1px;
  background: var(--porcelain);
  margin: 20px 0;
}

.btn-0 {
  margin-bottom: 32px;
}

.links {
  overflow: auto;
  padding-top: 12px;
}</style>
