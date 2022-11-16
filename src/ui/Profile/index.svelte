<script lang="ts">
  import { trackProfileClick } from '@/analytics/events/interaction'
  import Pic from './Pic.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author
  export let isTagName = true
  export let source: string
  export let feature: string

  $: if (isTagName && user.username === 'anonymous') isTagName = false

  function onClick(e) {
    trackProfileClick({
      id: user.id,
      username: user.username || undefined,
      feature,
      source,
    })

    window.__onLinkClick?.(e)
  }
</script>

<a class="row v-center c-black {className}" href="/profile/{user.id}" on:click={onClick}>
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

      .pic {
        box-shadow: inset 0px 0px 0px 1px var(--green);
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
