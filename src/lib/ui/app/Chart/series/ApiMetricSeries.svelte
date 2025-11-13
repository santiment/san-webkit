<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { useItemViewportPriorityCtx } from '$lib/ctx/viewport-priority/index.js'

  import RawSeries from './RawSeries.svelte'
  import { useApiMetricDataFlow } from '../ctx/index.js'

  type TProps = {
    series: TSeries
    index: number
  }

  let { series, index }: TProps = $props()

  const { settings = { priority: 0 } } = useItemViewportPriorityCtx.get() || {}
  useApiMetricDataFlow(series, index, settings)
</script>

{#key series.ui.$$.style}
  <RawSeries {series}></RawSeries>
{/key}
