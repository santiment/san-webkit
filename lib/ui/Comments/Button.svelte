<script>import Svg from './../../ui/Svg/svelte';
let className = '';
export { className as class };
export let count = 0;
export let href = '';
export let active = false;</script>

{#if href}
  <a {href} sapper:prefetch class="btn-2 {className}" class:active on:click>
    <Svg id="comment" w="16" h="14" class="mrg-xs mrg--r" />
    {count}
  </a>
{:else}
  <button class="btn-2 {className}" class:active on:click>
    <Svg id="comment" w="16" h="14" class="mrg-xs mrg--r" />
    {count}
  </button>
{/if}

<style>
  .btn-2 {
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
