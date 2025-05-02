<script lang="ts">
  import type { IEventMarker, IRenderItem } from '@santiment-network/chart-next'

  import { untrack } from 'svelte'
  import { tap, switchMap, pipe } from 'rxjs'
  import { createEventMarkers } from '@santiment-network/chart-next'
  import { applyStyles } from 'drawer-svelte'

  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { getFormattedDetailedTimestamp } from '$lib/utils/dates/index.js'
  import { useTimeZoneCtx } from '$lib/ctx/time/index.js'

  import { queryGetMetricSpikeExplanations, type TData, type TVariables } from './api.js'
  import { useChartCtx, useMetricSeriesCtx, type TSeries } from '../ctx/index.js'
  import { useChartGlobalParametersCtx } from '../ctx/global-parameters.svelte.js'
  import { drawSpikeExplanation } from './flow.svelte.js'

  const { chart } = useChartCtx()
  const { metricSeries } = useMetricSeriesCtx.get()
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { getAssetBySlug } = useAssetsCtx.get()
  const { applyTimeZoneOffset } = useTimeZoneCtx.get()

  let attachedMetric = $state.raw<null | TSeries>(null)
  let openedExplanation = $state.raw<null | TData[number]>(null)

  let explanations = $state.raw<TData>([])
  let markers = $derived<IEventMarker[]>(
    explanations.map((data) => ({
      data,
      time: data.spikeStartDatetime,
      draw: drawSpikeExplanation,
    })),
  )

  const eventMarkers = createEventMarkers(chart.$, [], onEventMarkerSelect)

  const getMetricSpikeExplanations = useObserveFnCall<TVariables>(() =>
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
    const { from, to } = globalParameters.dates$
    if (slug) {
      getMetricSpikeExplanations({ slug, from, to })
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

  let anchorNode = $state.raw<null | HTMLElement>(null)

  function onEventMarkerSelect(item: null | IRenderItem) {
    if (!anchorNode) return

    if (!item) {
      openedExplanation = null
      return
    }

    const paneElement = attachedMetric?.chartSeriesApi?.getPane()?.getHTMLElement()?.children[1]
    if (!paneElement) return

    paneElement.appendChild(anchorNode)
    applyStyles(anchorNode, { left: `${item.x}px`, top: `${item.y}px` })

    openedExplanation = item.data as IRenderItem<TData[number]>['data']
  }
</script>

<div bind:this={anchorNode} class="invisible absolute"></div>

<Popover
  isOpened={!!openedExplanation}
  contentProps={{ customAnchor: anchorNode, sideOffset: 16, interactOutsideBehavior: 'ignore' }}
  side="top"
  class="w-[360px] px-6 py-5 pt-4 text-rhino"
>
  {#snippet content()}
    {#if openedExplanation}
      {@const slug = globalParameters.$$.selector.slug!}
      {@const asset = getAssetBySlug(slug)}
      <div>
        <header class="mb-2.5 flex items-center justify-between">
          <h3 class="font-medium text-rhino">
            {asset?.name || slug}
          </h3>

          <span class="text-xs text-waterloo">
            {getFormattedDetailedTimestamp(
              applyTimeZoneOffset(
                new Date((openedExplanation.spikeStartDatetime as number) * 1000),
              ),
            )}
          </span>
        </header>

        {openedExplanation.explanation}
      </div>
    {/if}
  {/snippet}
</Popover>
