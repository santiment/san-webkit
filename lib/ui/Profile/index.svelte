<script>import { trackProfileClick } from './../../analytics/events/interaction';
import Pic from './Pic.svelte';
let className = '';
export { className as class };
export let user;
export let isTagName = true;
export let source;
export let feature;

$: if (isTagName && user.username === 'anonymous') isTagName = false;

function onClick(e) {
  var _a;

  trackProfileClick({
    id: user.id,
    username: user.username || undefined,
    feature,
    source
  });
  (_a = window.__onLinkClick) === null || _a === void 0 ? void 0 : _a.call(window, e);
}</script>

<a class="row v-center c-black {className}" href="/profile/{user.id}" on:click={onClick}>
  <Pic src={user.avatarUrl} class="mrg-s mrg--r pic-rQQTE1" />

  <span>
    {#if $$slots.name}
      <slot name="name" />
    {:else}
      {isTagName && user.username ? '@' : ''}{user.username || user.email}
      <slot />
    {/if}
  </span>
</a>

<style >a {
  min-width: 0;
}
a:hover {
  --color: var(--accent, var(--green));
}
a:hover :global(.pic-rQQTE1) {
  box-shadow: inset 0px 0px 0px 1px var(--green);
}

span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: var(--name-max-width);
}</style>
