<script>import { SANBASE_ORIGIN } from './../../utils/links';
import { trackProfileClick } from './../../analytics/events/interaction';
import Pic from './Pic.svelte';
let className = '';
export { className as class };
export let user;
export let isTagName = true;
export let source;
export let feature;
export let placeholderSize = undefined;
$: if (isTagName && user.username === 'anonymous')
    isTagName = false;
function onClick(e) {
    trackProfileClick({
        id: user.id,
        username: user.username || undefined,
        feature,
        source,
    });
    window.__onLinkClick?.(e);
}
</script>

<a
  class="row v-center c-black {className}"
  href="{SANBASE_ORIGIN}/profile/{user.id}"
  on:click={onClick}
>
  <Pic src={user.avatarUrl} class="mrg-s mrg--r pic-lXREE3" {placeholderSize} />

  <span>
    {#if $$slots.name}
      <slot name="name" />
    {:else}
      {isTagName && user.username ? '@' : ''}{user.username || user.email}
      <slot />
    {/if}
  </span>
</a>

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
a {
  min-width: 0;
}
a:hover {
  --color: var(--accent, var(--green));
}
a:hover :global(.pic-lXREE3) {
  box-shadow: 0px 0px 0px 1px var(--green);
}

span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: var(--name-max-width);
}</style>
