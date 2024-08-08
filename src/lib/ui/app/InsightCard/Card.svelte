<script lang="ts">
  import Bottom from './Bottom.svelte';
  import { getSEOLinkFromIdAndTitle } from '$lib/utils/url.js';

  let {
    class: className,
    insight,
    source,
  }: { class?: string, insight: any, source: string } = $props();

  let node

  const { id, title } = $derived(insight);
  const href = $derived(`/read/${getSEOLinkFromIdAndTitle(id, title)}`);
</script>

<div class="border row {className}" bind:this={node}>
  <div class="column min-w-0">
    <div class="top column">
      <slot {href} {node}></slot>
    </div>
    <Bottom {insight} {href} {source} />
  </div>
  <slot name="right"></slot>
</div>

<style lang="postcss">
  .top {
    padding: 18px 16px 16px 24px;

    :global(body:not(.desktop)) & {
      padding: 16px 20px;
    }
  }
</style>
