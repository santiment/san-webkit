<script lang="ts">
  import { createChart, createPathWatermark } from '@santiment-network/chart'
  import { onMount, type Snippet } from 'svelte'
  import { useChartCtx } from './ctx/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
  import { getTheme } from './theme.js'

  type TProps = { watermark?: boolean; watermarkOpacity?: string; children: Snippet }
  let { watermark = true, watermarkOpacity, children }: TProps = $props()

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

<div bind:this={chartContainerNode} class="relative z-[1] h-[500px]">
  {#if chart.$}
    {@render children()}
  {/if}
</div>
