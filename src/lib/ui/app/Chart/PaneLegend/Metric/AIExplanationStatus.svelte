<script lang="ts">
  import { cn } from '$ui/utils/index.js'
  import type { TSeries } from '../../ctx/series.svelte.js'

  import Chip from './Chip.svelte'

  type TProps = {
    metric: TSeries
    onclick?: (e: MouseEvent & { currentTarget: HTMLElement }) => void
  }
  let { metric, onclick }: TProps = $props()

  let active = $state(false)
</script>

<Chip
  class={cn(
    'cursor-pointer',
    !active &&
      'text-mystic after:absolute after:left-[3px] after:right-[3px] after:top-[9px] after:h-[1px] after:rotate-[26deg] after:bg-casper',
  )}
  explanation="{active ? 'Hide' : 'Show'} AI Explanation"
  {onclick}
>
  AI
</Chip>
