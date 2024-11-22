<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { useApiMetricDataFlow } from '../ctx/metric-data.svelte.js'
  import RawSeries from './RawSeries.svelte'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  useApiMetricDataFlow(series)
</script>

{#key series.type.$}
  <RawSeries {series}></RawSeries>
{/key}
