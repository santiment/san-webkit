<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import {
    createChart,
    createPathWatermark,
    createRangeSelection,
  } from '@santiment-network/chart-next'

  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
  import { useKeyboardShortcut } from '$lib/utils/keyboard/index.js'
  import { cn } from '$ui/utils/index.js'

  import { getTheme } from './theme.js'
  import { useChartCtx } from './ctx/index.js'
  import { Mode, ModeOptions, type TMode } from './types.js'

  type TProps = {
    /**
     * DRAG, SHIFT, ZOOM
     */
    mode?: TMode
    class?: string
    watermark?: boolean
    watermarkOpacity?: string
    options?: Parameters<typeof createChart>[1]
    onRangeSelectChange: Parameters<typeof createRangeSelection>[1]['onRangeSelectChange']
    onRangeSelectEnd: Parameters<typeof createRangeSelection>[1]['onRangeSelectEnd']
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

  const { ui } = useUiCtx()
  const { chart } = useChartCtx()

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

    createRangeSelection(firstPane, { color: '#9faac435', onRangeSelectChange, onRangeSelectEnd })

    const resetScalesOnDblClick = () => chart.$.resetAllScales()
    chart.$.subscribeDblClick(resetScalesOnDblClick)

    return () => {
      chart.$.unsubscribeDblClick(resetScalesOnDblClick)
      chart.$.remove()
    }
  })

  $effect(() => {
    if (!chart.$) return

    chart.$.applyOptions(theme)

    textWatermark?.applyOptions?.({ color: theme.watermark })
  })

  $effect(() => {
    if (!chart.$) return

    chart.$.applyOptions(ModeOptions[mode])
  })

  function useChartModeShortcut(key: 'SHIFT' | 'CMD', tempMode: 1 | 2) {
    useKeyboardShortcut(key, () => {
      if (chartContainerNode.matches(':hover') !== true) {
        return
      }

      mode = tempMode

      window.addEventListener('keyup', () => (mode = Mode.DRAG), { once: true })
    })
  }
</script>

<div bind:this={chartContainerNode} class={cn('relative z-[1]', className)}>
  {#if chart.$}
    {@render children()}
  {/if}
</div>
