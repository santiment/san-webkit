<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { calculateDataInterval } from '../../series/index.js'

  type TProps = { metric: TSeries }
  let { metric }: TProps = $props()
</script>

{#if metric.loading.$}
  <div class="loader ml-2"></div>
{:else}
  {@const interval = calculateDataInterval(metric.data.$)}

  {#if interval}
    <span
      aria-label="Data granularity"
      class="expl-tooltip ml-1 rounded-md bg-athens px-1.5 py-0.5 text-xs text-waterloo"
      style="--expl-align-x:-50%"
    >
      {interval}
    </span>
  {/if}
{/if}

<style>
  .loader {
    width: 18px;
    padding: 4px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--mystic);
    --_mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_mask);
    mask: var(--_mask);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
</style>
