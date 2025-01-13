<script lang="ts">
  import type { MouseEventHandler, Time } from '@santiment-network/chart-next'

  import { onMount } from 'svelte'
  import { tap, switchMap, pipe } from 'rxjs'
  import { createSeriesMarkers } from '@santiment-network/chart-next'

  import { useObserveFnCall } from '../../../utils/observable.svelte.js'

  import { queryGetMetricSpikeExplanations } from './api/spike-explanation.js'
  import { useChartCtx } from './ctx/index.js'
  import { useChartGlobalParametersCtx } from './ctx/global-parameters.svelte.js'

  type TProps = any
  let { series }: TProps = $props()

  const { chart } = useChartCtx()

  let markers = [] as any[]
  const markerPrimitive = createSeriesMarkers(series, markers)

  const getMetricSpikeExplanations = useObserveFnCall<{ slug: string }>(() =>
    pipe(
      tap(() => {
        markers = []
        markerPrimitive.setMarkers(markers)
      }),
      switchMap((data) =>
        queryGetMetricSpikeExplanations()(data).pipe(
          tap((explanations) => {
            markers = explanations.map((item) => {
              return {
                time: item.spikeStartDatetime,
                position: 'aboveBar',
                color: 'blue',
                shape: 'circle',
                text: 'AI',
                id: { explanation: item.explanation },
              }
            })

            markerPrimitive.setMarkers(markers)
          }),
        ),
      ),
    ),
  )
  console.log(series)

  const { globalParameters } = useChartGlobalParametersCtx()

  $effect(() => {
    const { slug } = globalParameters.$$.selector
    if (slug) {
      getMetricSpikeExplanations({ slug })
    }
  })

  onMount(() => {
    function handler(item: Parameters<MouseEventHandler<Time>>[0]) {
      if (item.hoveredObjectId) {
        // console.log(markers[item.hoveredObjectId.i])
        // alert(markers[item.hoveredObjectId.i]?.explanation)
        alert((item.hoveredObjectId as any).explanation)
      }
    }
    chart.$.subscribeClick(handler)

    return () => {
      chart.$.unsubscribeClick(handler)
    }
  })
</script>
