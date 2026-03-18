<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import Chip from './Chip.svelte'

  type TProps = { metric: TSeries }
  let { metric }: TProps = $props()
</script>

{#if metric.version.$}
  <Chip explanation="Metric version">
    v:{metric.version.$}
  </Chip>
{/if}
