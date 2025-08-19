<script lang="ts">
  import type { TSeries } from '../ctx/index.js'
  import type { TMetricData } from '../api/index.js'

  import { onMount } from 'svelte'

  import { createValueMap } from '$lib/utils/index.js'
  import { useItemViewportPriorityCtx } from '$lib/ctx/viewport-priority/index.svelte.js'

  import { useApiMetricDataFlow } from '../ctx/metric-data.svelte.js'

  type TProps = {
    series: TSeries
    index: number
    canvasNode: null | HTMLCanvasElement
    register: (paint: (ctx: CanvasRenderingContext2D) => void) => () => void
  }
  let { series, index, canvasNode, register }: TProps = $props()

  let data = $state.raw<TMetricData>([])

  const minimapMetric = createMinimapSeries(series)
  const viewportCtx = useItemViewportPriorityCtx.get()

  const settings = { priority: 10_000, minimalDelay: 8_000 }
  useApiMetricDataFlow(minimapMetric, index, settings)

  const scaler = $derived.by(() => {
    if (!canvasNode) return

    const data = minimapMetric.data.$
    if (!data.length) return

    const [min, max] = findDataMinMax(data)

    return {
      data,
      mapValueToY: createValueMap(min, max, canvasNode.offsetHeight - 2, 2),
      mapIndexToX: createValueMap(0, data.length, 1, canvasNode.offsetWidth - 1),
    }
  })

  onMount(() => register(paint))

  if (viewportCtx) {
    $effect.pre(() => {
      settings.priority = 10_000 + viewportCtx.settings.priority
    })
  }

  function paint(ctx: CanvasRenderingContext2D) {
    if (!scaler) return

    const color = minimapMetric.ui.$$.color
    const { data, mapIndexToX, mapValueToY } = scaler

    ctx.save()

    ctx.lineWidth = 1
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(mapIndexToX(0), mapValueToY(data[0].value))

    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(mapIndexToX(i), mapValueToY(data[i].value))
    }

    ctx.stroke()
    ctx.restore()
  }

  function createMinimapSeries(series: TSeries) {
    return Object.assign({}, series, {
      loading: { $: false }, // stub
      error: { $: false }, // stub
      data: {
        get $() {
          return data
        },
        set $(value: TMetricData) {
          data = value
        },
      },
    })
  }

  function findDataMinMax(data: TMetricData) {
    const minMax = [Infinity, -Infinity]

    for (let i = 0; i < data.length; i++) {
      const { value } = data[i]

      if (value < minMax[0]) {
        minMax[0] = value
      }

      if (value > minMax[1]) {
        minMax[1] = value
      }
    }

    return minMax
  }
</script>
