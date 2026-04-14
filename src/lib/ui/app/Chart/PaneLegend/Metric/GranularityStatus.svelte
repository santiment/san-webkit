<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import Chip from './Chip.svelte'
  import { calculateDataInterval } from '../../series/index.js'

  type TProps = {
    metric: TSeries
    onclick?: (e: MouseEvent & { currentTarget: HTMLElement }) => void
  }
  let { metric, onclick }: TProps = $props()
</script>

{#if !metric.loading.$}
  {@const interval = calculateDataInterval(metric.data.$)}

  {#if interval}
    <Chip class="cursor-pointer" explanation="Data granularity" {onclick}>
      {interval}
    </Chip>
  {/if}
{/if}
