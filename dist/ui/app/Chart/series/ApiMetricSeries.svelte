<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { useItemViewportPriorityCtx } from '../../../../ctx/viewport-priority/index.js'

  import RawSeries from './RawSeries.svelte'
  import { useApiMetricDataFlow, useChartCtx } from '../ctx/index.js'

  type TProps = {
    series: TSeries
    index: number
    onData?: () => void
  }

  let { series, index, onData }: TProps = $props()

  useChartCtx.get()
  const { settings = { priority: 0 } } = useItemViewportPriorityCtx.get() || {}
  useApiMetricDataFlow(series, index, settings, onData)
</script>

<RawSeries {series}></RawSeries>
