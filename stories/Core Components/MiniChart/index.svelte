<script lang="ts">
  import InteractiveArea from '@/ui/MiniChart/InteractiveArea.svelte'
  import MultiArea from '@/ui/MiniChart/MultiArea.svelte'
  import { TooltipContext$$ } from '@/ui/MiniChart/tooltip'
  import { formatUsd } from '@/utils/formatting'
  import { multiAreas, prices, volumes } from './data'

  TooltipContext$$()

  const width = 120
  const height = 40
</script>

<section class="column gap-xxl">
  <div class="row gap-xxl">
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
      tooltipVisible
      formatTooltipValue={formatUsd}
    />
  </div>

  <div class="row gap-xxl">
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
      formatTooltipValue={formatUsd}
    />
  </div>

  <div class="row gap-xxl">
    <InteractiveArea data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
    <InteractiveArea data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
  </div>

  <div class="row gap-xxl">
    <MultiArea height={80} width={200} areas={multiAreas} tooltipVisible />
  </div>

  <div class="row gap-xxl">
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
