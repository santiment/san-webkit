<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { calculateDataInterval } from '../../series/index.js'

  type TProps = { metric: TSeries }
  let { metric }: TProps = $props()
</script>

{#if !metric.loading.$}
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
