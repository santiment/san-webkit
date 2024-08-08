<script lang="ts">
  import Pic from './Pic.svelte'
  import { SANBASE_ORIGIN } from '$lib/utils/links.js';
  const { class: className, user, isTagName = true, source, feature, placeholderSize = undefined } = $props();

</script>

<a
  class="row v-center c-black {className}"
  href="{SANBASE_ORIGIN}/profile/{user.id}"
>
  <Pic src={user.avatarUrl} class="mrg-s mrg--r" {placeholderSize} />

  <span>
    {#if $$slots.name}
      <slot name="name" />
    {:else}
      {isTagName && user.username ? '@' : ''}{user.username || user.email}
      <slot />
    {/if}
  </span>
</a>

<style lang="postcss">
  a {
    min-width: 0;

    &:hover {
      --color: var(--accent, var(--green));

      .pic {
        box-shadow: 0px 0px 0px 1px var(--green);
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
