<script>import Pic from './Pic.svelte';
let className = '';
export { className as class };
export let user;
export let isTagName = true;

$: if (isTagName && user.username === 'anonymous') isTagName = false;</script>

<a
  class="row v-center c-black {className}"
  href="/profile/{user.id}"
  on:click={window.__onLinkClick}
>
  <Pic src={user.avatarUrl} class="mrg-s mrg--r pic-21nEk4" />

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
a:hover :global(.pic-21nEk4) {
  box-shadow: inset 0px 0px 0px 1px var(--green);
}

span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: var(--name-max-width);
}</style>
