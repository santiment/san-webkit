<script lang="ts">
  import type { HTMLCanvasAttributes } from 'svelte/elements'

  import { onMount } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  import { CRYPTO_ERA_START_ISO } from '$lib/utils/dates/index.js'

  import Metric from './Metric.svelte'
  import { useMetricSeriesCtx } from '../ctx/series.svelte.js'
  import { useChartGlobalParametersCtx } from '../ctx/global-parameters.svelte.js'

  type TProps = { onpointerdown: HTMLCanvasAttributes['onpointerdown'] }
  let { onpointerdown }: TProps = $props()

  const { metricSeries } = useMetricSeriesCtx.get()
  const { globalParameters } = useChartGlobalParametersCtx.get()

  const { globalParameters: minimapParameters } = useChartGlobalParametersCtx.set({
    from: CRYPTO_ERA_START_ISO,
    to: 'utc_now',
  })

  $effect.pre(() => {
    minimapParameters.$$.selector = $state.snapshot(globalParameters.$$.selector)
  })

  let canvasNode = $state.raw<null | HTMLCanvasElement>(null)

  type TPainter = (ctx: CanvasRenderingContext2D) => void
  const paints = new SvelteSet<TPainter>()

  onMount(() => {
    if (!canvasNode) return

    const dpr = window.devicePixelRatio

    const { offsetWidth, offsetHeight } = canvasNode

    canvasNode.style.width = offsetWidth + 'px'
    canvasNode.style.height = offsetHeight + 'px'

    canvasNode.width = offsetWidth * dpr
    canvasNode.height = offsetHeight * dpr

    canvasNode.getContext('2d')!.scale(dpr, dpr)
  })

  $effect(() => {
    const ctx = canvasNode?.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvasNode!.offsetWidth, canvasNode!.offsetHeight)

    for (const painter of paints) {
      painter(ctx)
    }
  })

  function registerMetricPainter(painter: TPainter) {
    paints.add(painter)
    return () => paints.delete(painter)
  }
</script>

<canvas
  bind:this={canvasNode}
  class="z-[1] h-[40px] flex-1 cursor-ew-resize bg-transparent"
  {onpointerdown}
></canvas>

{#if canvasNode}
  {#each metricSeries.$.slice(0, 4) as item (item.id)}
    <Metric series={item} {canvasNode} register={registerMetricPainter}></Metric>
  {/each}
{/if}

<style>
  canvas:hover :global(~ .area > button::before) {
    pointer-events: none;
    position: absolute;
    content: attr(aria-label);
    font-size: 12px;
    line-height: 16px;
    background: #505573;
    color: #fff;
    border-radius: 4px;
    padding: 5px 12px;
    width: var(--expl-width, auto);
    white-space: var(--expl-white-space, nowrap);
    right: var(--expl-right);
    left: var(--expl-left);
    bottom: var(--expl-bottom);
    top: var(--expl-position-y, -6px);
    transform: translate(var(--expl-align-x, 0), var(--expl-align-y, -100%));
    z-index: var(--expl-z-index, 30);
  }
</style>
