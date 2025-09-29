<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { useItemViewportPriorityCtx } from '../../../../ctx/viewport-priority/index.js'

  import RawSeries from './RawSignalSeries.svelte'
  import { useApiMetricDataFlow } from '../ctx/index.js'

  type TProps = {
    series: TSeries
    priceSeries: TSeries
    index: number
  }

  let { series, priceSeries, index }: TProps = $props()

  const { settings = { priority: 100 } } = useItemViewportPriorityCtx.get() || {}
  useApiMetricDataFlow(series, index, settings)
</script>

<RawSeries {series} {priceSeries}></RawSeries>
