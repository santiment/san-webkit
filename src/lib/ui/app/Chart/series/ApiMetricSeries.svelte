<script lang="ts">
  import type { TExecutorOptions } from '$lib/api/index.js'
  import type { TSeries } from '../ctx/series.svelte.js'

  import { useApiMetricDataFlow } from '../ctx/metric-data.svelte.js'
  import RawSeries from './RawSeries.svelte'

  type TProps = {
    series: TSeries
    fetcher?: TExecutorOptions['fetcher']
  }

  let { series, fetcher }: TProps = $props()

  useApiMetricDataFlow(series, { fetcher })
</script>

{#key series.type.$}
  <RawSeries {series}></RawSeries>
{/key}
