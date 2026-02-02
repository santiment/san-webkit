<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import Chip from './Chip.svelte'
  import { calculateDataInterval } from '../../series/index.js'

  type TProps = { metric: TSeries }
  let { metric }: TProps = $props()
</script>

{#if !metric.loading.$}
  {@const interval = calculateDataInterval(metric.data.$)}

  {#if interval}
    <Chip explanation="Data granularity">
      {interval}
    </Chip>
  {/if}
{/if}
