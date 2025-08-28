<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import {
    createChart,
    createPathWatermark,
    createRangeSelection,
  } from '@santiment-network/chart-next'

  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'
  import { useKeyboardShortcut } from '../../../utils/keyboard/index.js'
  import { setDayEnd, setDayStart } from '../../../utils/dates/index.js'
  import { cn } from '../../utils/index.js'

  import { getTheme } from './theme.js'
  import { useChartCtx, useChartGlobalParametersCtx } from './ctx/index.js'
  import { Mode, ModeOptions, type TMode } from './types.js'
  import { useChartPanesCtx } from './ctx/panes.svelte.js'
  import { useShiftModeStartPoint } from './PaneLegend/ctx.svelte.js'

  type TRangeSelectHandler = Parameters<typeof createRangeSelection>[1]['onRangeSelectChange']
  type TProps = {
    /**
     * DRAG, SHIFT, ZOOM
     */
    mode?: TMode
    class?: string
    watermark?: boolean
    watermarkOpacity?: string
    options?: Parameters<typeof createChart>[1]
    onRangeSelectChange: TRangeSelectHandler
    onRangeSelectEnd: TRangeSelectHandler
    children: Snippet
  }
  let {
    mode = $bindable(Mode.DRAG),
    class: className,
    watermark = true,
    watermarkOpacity,
    options,
    onRangeSelectChange,
    onRangeSelectEnd,
    children,
  }: TProps = $props()

  let chartContainerNode: HTMLElement
  let textWatermark: null | ReturnType<typeof createPathWatermark<any>> = null
  let isScrollEnabled = false

  const { ui } = useUiCtx()
  const { chart } = useChartCtx()
  const { onPaneWidgetMount } = useChartPanesCtx()
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { startPointIndex } = useShiftModeStartPoint()

  const theme = $derived((ui.$$.isNightMode, getTheme(watermarkOpacity)))

  useChartModeShortcut('SHIFT', Mode.SHIFT)
  useChartModeShortcut('CMD', Mode.ZOOM)

  onMount(() => {
    chart.$ = createChart(chartContainerNode, {
      crosshair: { mode: 0 },
      rightPriceScale: { visible: false },
      overlayPriceScales: { autoScale: false },
      onPaneWidgetMount,
      ...options,
    })
    const firstPane = chart.$.panes()[0]

    if (watermark) {
      textWatermark = createPathWatermark(firstPane, { color: theme.watermark })
    }

    // TODO(vanguard): Draw selection on all panes
    // TODO(vanguard): Draw datetime on X axis of selection start
    createRangeSelection(firstPane, {
      color: '#9faac435',
      onRangeSelectChange: _onRangeSelectChange,
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
    if (mode === Mode.DRAG) {
      isScrollEnabled = false
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

  onMount(() => {
    window.addEventListener('blur', resetChartInteractionMode)
    return () => window.removeEventListener('blur', resetChartInteractionMode)
  })

  function _onRangeSelectChange(
    start: Parameters<TRangeSelectHandler>[0],
    end: Parameters<TRangeSelectHandler>[1],
  ) {
    if (mode === Mode.SHIFT && start.logical) {
      startPointIndex.$ = start.logical as number
      return
    }

    onRangeSelectChange?.(start, end)
  }

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

    if (mode === Mode.SHIFT) {
      startPointIndex.$ = 0
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

      if (tempMode === Mode.SHIFT) {
        startPointIndex.$ = 0
      }

      window.addEventListener('keyup', resetChartInteractionMode, { once: true })
    })
  }

  function resetChartInteractionMode() {
    isScrollEnabled = false
    mode = Mode.DRAG
    startPointIndex.$ = null
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
