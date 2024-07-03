<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let count = 0
  export let href = ''
  export let active = false
</script>

{#if href}
  <a {href} sapper:prefetch class="comment-btn btn-2 {className}" class:active on:click>
    <Svg id="comment" w="16" h="14" />
    {count}
  </a>
{:else}
  <button class="comment-btn btn-2 {className}" class:active on:click>
    <Svg id="comment" w="16" h="14" />
    {count}
  </button>
{/if}

<style>
  .comment-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 12px;
    border-radius: 20px;
    white-space: nowrap;
    --color: var(--waterloo);
    --fill-hover: var(--waterloo);
  }

  .active {
    --color: var(--green);
    --border: var(--green);
    --color-hover: var(--green-hover);
    --border-hover: var(--green-hover);
    --fill-hover: var(--green-hover);
  }
</style>
