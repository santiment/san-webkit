<script lang="ts">
  import { createChart, createPathWatermark } from '@santiment-network/chart'
  import { onMount, type Snippet } from 'svelte'
  import { useChartCtx } from './ctx/index.js'

  type TProps = { watermark?: string; children: Snippet }
  let { watermark, children }: TProps = $props()

  let chartContainerNode: HTMLElement

  const { chart } = useChartCtx()

  onMount(() => {
    chart.$ = createChart(chartContainerNode, {
      crosshair: { mode: 0 },
      rightPriceScale: { visible: false },
      overlayPriceScales: { autoScale: false },
    })

    if (watermark) {
      const firstPane = chart.$.panes()[0]
      const _textWatermark = createPathWatermark(firstPane, { color: watermark })
    }

    return () => {
      chart.$.remove()
    }
  })
</script>

<div bind:this={chartContainerNode} class="relative z-[1] h-[500px]">
  {#if chart.$}
    {@render children()}
  {/if}
</div>
