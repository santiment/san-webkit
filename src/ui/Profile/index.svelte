<script lang="ts">
  import Pic from './Pic.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author
  export let isTagName = true

  $: if (isTagName && user.username === 'anonymous') isTagName = false
</script>

<a
  class="row v-center c-black {className}"
  href="/profile/{user.id}"
  on:click={window.__onLinkClick}
>
  <Pic src={user.avatarUrl} class="mrg-s mrg--r $style.pic" />

  <span>
    {#if $$slots.name}
      <slot name="name" />
    {:else}
      {isTagName && user.username ? '@' : ''}{user.username || user.email}
      <slot />
    {/if}
  </span>
</a>

<style lang="scss">
  a {
    min-width: 0;

    &:hover {
      --color: var(--accent, var(--green));

      & .pic {
        border: 1px solid var(--green);
      }
    }
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: var(--name-max-width);
  }
</style>
