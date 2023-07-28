<script lang="ts">
  import Tooltip from '@/ui/Tooltip/Tooltip.svelte'
  import type { ComponentProps } from 'svelte'

  export let position: ComponentProps<Tooltip>['position']
</script>

<Tooltip {position} let:trigger {...$$restProps}>
  <div use:trigger>{position} position</div>

  <div slot="tooltip" class="tooltip">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </div>
</Tooltip>

<style>
  .tooltip {
    padding: 8px 12px;
    max-width: 200px;
  }
</style>
