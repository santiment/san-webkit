<script lang="ts">
  import type { IEventMarker } from '@santiment-network/chart-next'
  import type { TAssetSlug } from '$lib/ctx/assets/index.svelte.js'

  import { untrack } from 'svelte'
  import { tap, switchMap, pipe } from 'rxjs'
  import { createEventMarkers } from '@santiment-network/chart-next'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'

  import { queryGetMetricSpikeExplanations, type TData } from './api.js'
  import { useChartCtx, useMetricSeriesCtx, type TSeries } from '../ctx/index.js'
  import { useChartGlobalParametersCtx } from '../ctx/global-parameters.svelte.js'
  import { drawSpikeExplanation } from './flow.svelte.js'

  const { chart } = useChartCtx()
  const { metricSeries } = useMetricSeriesCtx.get()
  const { globalParameters } = useChartGlobalParametersCtx.get()

  let attachedMetric = $state.raw<null | TSeries>(null)
  let explanations = $state.raw<TData>([])
  let markers = $derived<IEventMarker[]>(
    explanations.map((data) => ({
      data,
      time: data.spikeStartDatetime,
      draw: drawSpikeExplanation,
    })),
  )

  const eventMarkers = createEventMarkers(chart.$, [], onEventMarkerSelect)

  const getMetricSpikeExplanations = useObserveFnCall<{ slug: TAssetSlug }>(() =>
    pipe(
      tap(() => {
        explanations = []
      }),
      switchMap((variables) =>
        queryGetMetricSpikeExplanations()(variables).pipe(tap((data) => (explanations = data))),
      ),
    ),
  )

  $effect(() => {
    const { slug } = globalParameters.$$.selector
    if (slug) {
      getMetricSpikeExplanations({ slug })
    }
  })

  $effect(() => {
    eventMarkers.setData(markers)

    const firstMetric = metricSeries.$[0]
    if (firstMetric && firstMetric === untrack(() => attachedMetric)) return

    eventMarkers.detach()

    requestAnimationFrame(() => {
      attachedMetric = firstMetric
      const series = firstMetric.chartSeriesApi

      series!.attachPrimitive(eventMarkers)
    })
  })

  function onEventMarkerSelect(item: null | IEventMarker) {
    console.log(item)
  }
</script>
