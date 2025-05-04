<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import RawSeries from './RawSeries.svelte'
  import { useApiMetricDataFlow } from '../ctx/metric-data.svelte.js'

  type TProps = {
    series: TSeries
  }

  let { series }: TProps = $props()

  useApiMetricDataFlow(series, { priority: 0 })
</script>

{#key series.type.$}
  <RawSeries {series}></RawSeries>
{/key}
