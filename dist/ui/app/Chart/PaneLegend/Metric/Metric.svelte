<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { cn } from '../../../../utils/index.js'
  import Button from '../../../../core/Button/Button.svelte'
  import Tooltip from '../../../../core/Tooltip/Tooltip.svelte'

  import Value from './Value.svelte'
  import Controls from './Controls.svelte'
  import { useMetricInfoCtx } from './ctx.svelte.js'

  type TProps = {
    metric: TSeries
    label?: Snippet<[TSeries]>
    paneControls?: boolean
    onmouseenter?: () => void
    onmouseleave?: () => void
  }
  let { metric, label, paneControls, ...rest }: TProps = $props()

  const { openedMetric } = useMetricInfoCtx.get()
</script>

<div {...rest} class="inline-flex gap-1.5 whitespace-nowrap rounded bg-white/70 center">
  <div
    style:---metric-color={metric.ui.$$.color}
    class={cn(
      'group/pane-metric relative flex whitespace-nowrap rounded border border-transparent bg-transparent p-0.5 px-1.5 center hover:border-[var(---metric-color)] hover:bg-white hover:shadow [&+span]:hover:hidden',
      openedMetric.$ === metric &&
        'metric-opened border-[var(---metric-color)] bg-white shadow [&+span]:hidden',
      !metric.visible.$ && 'text-casper',
    )}
  >
    {#if label}
      {@render label(metric)}
    {:else}
      {metric.label}
    {/if}

    <Controls {metric} {paneControls}></Controls>
  </div>

  {#if metric.visible.$}
    {#if metric.error.$}
      <Tooltip position="bottom" class="w-[360px] px-6 py-5 pt-4 text-rhino shadow-dropdown">
        {#snippet children({ ref, isOpened })}
          <Button
            {ref}
            variant="fill"
            icon="error"
            class={cn('bg-red-light-1 fill-red hover:bg-red-light-2', isOpened && 'bg-red-light-2')}
            size="sm"
          ></Button>
        {/snippet}

        {#snippet content()}
          {metric.error.$}
        {/snippet}
      </Tooltip>
    {:else}
      <Value {metric}></Value>
    {/if}
  {/if}
</div>
