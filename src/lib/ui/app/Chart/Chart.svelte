<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import {
    createChart,
    createPathWatermark,
    createRangeSelection,
  } from '@santiment-network/chart-next'

  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
  import { useKeyboardShortcut } from '$lib/utils/keyboard/index.js'
  import { setDayEnd, setDayStart } from '$lib/utils/dates/index.js'
  import { cn } from '$ui/utils/index.js'

  import { getTheme } from './theme.js'
  import { useChartCtx, useChartGlobalParametersCtx } from './ctx/index.js'
  import { Mode, ModeOptions, type TMode } from './types.js'

  type TRangeSelectHandler = Parameters<typeof createRangeSelection>[1]['onRangeSelectChange']
  type TProps = {
    /**
     * DRAG, SHIFT, ZOOM
     */
    mode?: TMode
    class?: string
    watermark?: boolean
    watermarkOpacity?: string
    containerRef?: HTMLElement
    options?: Parameters<typeof createChart>[1]
    onRangeSelectChange: TRangeSelectHandler
    onRangeSelectEnd: TRangeSelectHandler
    children: Snippet
  }
  let {
    containerRef: chartContainerNode = $bindable() as HTMLElement,
    mode = $bindable(Mode.DRAG),
    class: className,
    watermark = true,
    watermarkOpacity,
    options,
    onRangeSelectChange,
    onRangeSelectEnd,
    children,
  }: TProps = $props()

  let textWatermark: null | ReturnType<typeof createPathWatermark<any>> = null
  let isScrollEnabled = false

  const { ui } = useUiCtx()
  const { chart } = useChartCtx()
  const { globalParameters } = useChartGlobalParametersCtx.get()

  const theme = $derived((ui.$$.isNightMode, getTheme(watermarkOpacity)))

  useChartModeShortcut('SHIFT', Mode.SHIFT)
  useChartModeShortcut('CMD', Mode.ZOOM)

  onMount(() => {
    chart.$ = createChart(chartContainerNode, {
      crosshair: { mode: 0 },
      rightPriceScale: { visible: false },
      overlayPriceScales: { autoScale: false },
      ...options,
    })
    const firstPane = chart.$.panes()[0]

    if (watermark) {
      textWatermark = createPathWatermark(firstPane, { color: theme.watermark })
    }

    createRangeSelection(firstPane, {
      color: '#9faac435',
      onRangeSelectChange,
      onRangeSelectEnd: _onRangeSelectEnd,
    })

    const resetScalesOnDblClick = () => chart.$?.resetAllScales()
    chart.$.subscribeDblClick(resetScalesOnDblClick)

    return () => {
      if (!chart.$) return

      chart.$.unsubscribeDblClick(resetScalesOnDblClick)
      chart.$.remove()
      chart.$ = undefined
    }
  })

  $effect(() => {
    if (!chart.$) return

    chart.$.applyOptions(theme)

    textWatermark?.applyOptions?.({ color: theme.watermark })
  })

  $effect(() => {
    if (!chart.$) return

    const scrollOptions = ModeOptions[mode].handleScroll

    const options = {
      handleScroll: {
        pressedMouseMove: scrollOptions.pressedMouseMove,
        mouseWheel: scrollOptions.mouseWheel && isScrollEnabled,
      },
      handleScale: { mouseWheel: isScrollEnabled },
    }

    chart.$.applyOptions(options)
  })

  function _onRangeSelectEnd(
    left: Parameters<TRangeSelectHandler>[0],
    right: Parameters<TRangeSelectHandler>[1],
  ) {
    if (mode === Mode.ZOOM) {
      if (right.point!.x - left.point!.x <= 20) {
        return
      }

      const fromDate = setDayStart(new Date((left.time as number) * 1000), { utc: true })
      const toDate = setDayEnd(new Date((right.time as number) * 1000), { utc: true })

      globalParameters.$$.from = fromDate.toISOString()
      globalParameters.$$.to = toDate.toISOString()

      return
    }

    onRangeSelectEnd?.(left, right)
  }

  function useChartModeShortcut(key: 'SHIFT' | 'CMD', tempMode: 1 | 2) {
    useKeyboardShortcut(key, () => {
      if (chartContainerNode.matches(':hover') !== true) {
        return
      }

      isScrollEnabled = true
      mode = tempMode

      window.addEventListener('keyup', resetChartInteractionMode, { once: true })
    })
  }

  function resetChartInteractionMode() {
    isScrollEnabled = false
    mode = Mode.DRAG
  }
</script>

<div
  bind:this={chartContainerNode}
  class={cn('relative z-[1] column [&>div]:!overflow-visible', className)}
>
  {#if chart.$}
    {@render children()}
  {/if}
</div>
