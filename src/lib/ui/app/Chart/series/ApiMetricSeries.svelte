<script lang="ts">
  import { useApiMetricDataFlow } from '../ctx/metrics-data.svelte.js'
  import type { TSeries } from '../ctx/series.svelte.js'
  import RawSeries from './RawSeries.svelte'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  useApiMetricDataFlow(series)
</script>

{#key series.type.$}
  <RawSeries {...series}></RawSeries>
{/key}
