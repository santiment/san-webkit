<script lang="ts">
  import type { TMiniChartProps, TArea } from './types.js'

  import Area from './Area.svelte'
  import { getValueAt } from './utils.js'
  import SvgTooltip from './SvgTooltip.svelte'
  import InteractiveContainer from './InteractiveContainer.svelte'

  type TProps = {
    id?: string
    width: TMiniChartProps['width']
    height: TMiniChartProps['height']
    areas: TArea[]
    tooltipVisible?: boolean
    tooltipSyncKey?: string
  }

  const {
    id = '',
    width,
    height,
    areas,
    tooltipVisible = false,
    tooltipSyncKey = '',
  }: TProps = $props()

  const defaultFormatter = (value: number) => value.toString()
</script>

<InteractiveContainer
  as="article"
  style="width: {width}px; height: {height}px;"
  class="relative"
  {tooltipSyncKey}
>
  {#snippet children({ offset })}
    {#each areas as { data, color }, i}
      <div class="absolute">
        <Area {data} {height} {width} style="--color: var(--{color}); opacity: 0.9" id="{id}-{i}" />
      </div>
    {/each}

    {#if tooltipVisible && offset}
      <svg viewBox="0 0 {width} {height}" {height} role="figure">
        <line
          x1={offset}
          x2={offset}
          y1="0"
          y2={height}
          stroke="var(--waterloo)"
          stroke-width={2}
        />
      </svg>

      <SvgTooltip>
        {#snippet value()}
          <div class="flex flex-col">
            {#each areas as { title, data, color, formatter = defaultFormatter }}
              {@const currentValue = getValueAt(data, offset, width)}
              {@const valueFormatted = formatter(currentValue)}

              <div style:--color="var(--{color})" class="flex items-center gap-1">
                <div class="h-4 w-0.5 rounded bg-[var(--color)]"></div>
                <span>{valueFormatted}</span>
                <span class="text-waterloo">{title}</span>
              </div>
            {/each}
          </div>
        {/snippet}
      </SvgTooltip>
    {/if}
  {/snippet}
</InteractiveContainer>
