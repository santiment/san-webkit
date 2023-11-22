<script lang="ts">
  import Area from '@/ui/MiniChart/Area.svelte'
  import { prices, volumes } from './data'
  import { TooltipContext$$ } from '@/ui/MiniChart/tooltip'
  import { formatUsd } from '@/utils/formatting'

  TooltipContext$$()

  const width = 120
  const height = 40
</script>

<section class="column gap-xxl">
  <div class="row gap-xxl">
    <Area
      data={volumes}
      {height}
      {width}
      style="--color: var(--cyan)"
      tooltipSyncKey="sync-key-1"
      tooltipVisible
    />

    <Area
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
    <Area
      data={volumes}
      {height}
      {width}
      style="--color: var(--cyan)"
      tooltipSyncKey="sync-key-2"
      tooltipVisible
    />

    <Area
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
    <Area data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
    <Area data={volumes} {height} {width} style="--color: var(--green)" tooltipVisible />
  </div>
</section>
