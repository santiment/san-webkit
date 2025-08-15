<script lang="ts">
  import { InteractiveArea, MultiArea } from '$ui/app/MiniChart/index.js'
  import { multiAreas, prices, volumes } from './data.js'
  import { useMiniChartTooltipCtx } from '$ui/app/MiniChart/ctx.svelte.js'
  import { usdFormatter } from '$lib/utils/formatters/index.js'

  useMiniChartTooltipCtx.set()

  const width = 120
  const height = 40
</script>

<section class="flex flex-col gap-8">
  <div class="flex gap-8">
    <InteractiveArea
      data={volumes}
      {height}
      {width}
      style="--color: var(--cyan)"
      tooltipSyncKey="sync-key-1"
      tooltipVisible
    />

    <InteractiveArea
      data={prices}
      {height}
      {width}
      style="--color: var(--red)"
      tooltipSyncKey="sync-key-1"
      formatTooltipValue={usdFormatter}
      tooltipVisible
    />
  </div>

  <div class="flex gap-8">
    <InteractiveArea
      data={volumes}
      {height}
      {width}
      style="--color: var(--cyan)"
      tooltipSyncKey="sync-key-2"
      tooltipVisible
    />

    <InteractiveArea
      data={prices}
      {height}
      {width}
      style="--color: var(--red)"
      tooltipSyncKey="sync-key-2"
      tooltipVisible
      formatTooltipValue={usdFormatter}
    />
  </div>

  <div class="flex gap-8">
    <InteractiveArea data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
    <InteractiveArea data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
  </div>

  <div class="flex gap-8">
    <MultiArea height={80} width={200} areas={multiAreas} tooltipVisible />
  </div>

  <div class="flex gap-8">
    <MultiArea
      height={80}
      width={200}
      areas={multiAreas}
      tooltipVisible
      tooltipSyncKey="multi-tooltips"
    />

    <MultiArea
      height={80}
      width={200}
      areas={multiAreas}
      tooltipVisible
      tooltipSyncKey="multi-tooltips"
    />
  </div>
</section>
