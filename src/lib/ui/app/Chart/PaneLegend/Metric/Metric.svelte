<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { cn } from '$ui/utils/index.js'

  import Value from './Value.svelte'
  import Controls from './Controls.svelte'

  type TProps = {
    metric: TSeries
    label?: Snippet<[TSeries]>
  }
  let { metric, label }: TProps = $props()
</script>

<div class="inline-flex gap-1.5 whitespace-nowrap rounded bg-white/70 center">
  <div
    style:---metric-color={metric.color.$}
    class={cn(
      'group/pane-metric relative flex whitespace-nowrap rounded border border-transparent bg-transparent p-0.5 px-1.5 center hover:border-[var(---metric-color)] hover:bg-white hover:shadow [&+span]:hover:hidden',
      !metric.visible.$ && 'text-casper',
    )}
  >
    {#if label}
      {@render label(metric)}
    {:else}
      {metric.label}
    {/if}

    <Controls {metric}></Controls>
  </div>

  {#if metric.visible.$}
    <Value {metric}></Value>
  {/if}
</div>
