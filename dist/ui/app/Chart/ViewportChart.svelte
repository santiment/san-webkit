<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { BROWSER } from 'esm-env'

  import { useItemViewportPriorityCtx } from '../../../ctx/viewport-priority/index.svelte.js'
  import { cn } from '../../utils/index.js'

  import Chart from './Chart.svelte'
  import { Mode } from './types.js'

  type TProps = ComponentProps<typeof Chart>
  let { mode = $bindable(Mode.DRAG), ...props }: TProps = $props()

  const viewportPriorityCtx = useItemViewportPriorityCtx.get()
  if (BROWSER && process.env.IS_DEV_MODE) {
    if (!viewportPriorityCtx) {
      throw new Error('useItemViewportPriorityCtx context is not set')
    }
  }

  // TODO: Mount ApiMetricSeries when outside of viewport and idling
</script>

{#if viewportPriorityCtx?.checkIsInViewport$()}
  <Chart bind:mode {...props}></Chart>
{:else}
  <div class={cn('relative z-[1] column [&>div]:!overflow-visible', props.class)}></div>
{/if}
