<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import { createChart, createPathWatermark } from '@santiment-network/chart'
  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'
  import { cn } from '../../utils/index.js'
  import { getTheme } from './theme.js'
  import { useChartCtx } from './ctx/index.js'

  type TProps = {
    class?: string
    watermark?: boolean
    watermarkOpacity?: string
    children: Snippet
  }
  let { class: className, watermark = true, watermarkOpacity, children }: TProps = $props()

  let chartContainerNode: HTMLElement
  let textWatermark: null | ReturnType<typeof createPathWatermark<any>> = null

  const { ui } = useUiCtx()
  const { chart } = useChartCtx()

  const theme = $derived((ui.$$.isNightMode, getTheme(watermarkOpacity)))

  onMount(() => {
    chart.$ = createChart(chartContainerNode, {
      crosshair: { mode: 0 },
      rightPriceScale: { visible: false },
      overlayPriceScales: { autoScale: false },
    })

    if (watermark) {
      const firstPane = chart.$.panes()[0]
      textWatermark = createPathWatermark(firstPane, { color: theme.watermark })
    }

    return () => {
      chart.$.remove()
    }
  })

  $effect(() => {
    if (!chart.$) return

    chart.$.applyOptions(theme)

    textWatermark?.applyOptions?.({ color: theme.watermark })
  })
</script>

<div bind:this={chartContainerNode} class={cn('relative z-[1]', className)}>
  {#if chart.$}
    {@render children()}
  {/if}
</div>
