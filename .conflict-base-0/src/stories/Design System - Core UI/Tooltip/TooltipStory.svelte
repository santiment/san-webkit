<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/index.js'

  export const { position }: { position: ComponentProps<Tooltip>['position'] } = $props()
</script>

<Tooltip {position} type="arrow">
  {#snippet children({ ref })}
    <Button icon="plus" class="bg-white" {ref}>{position} position</Button>
  {/snippet}

  {#snippet content()}
    {#if Math.random() > 0.5}
      <p>Some text goes here</p>
    {:else}
      <p><span>Some text goes here</span> <br /><span>within 2 lines</span></p>
    {/if}
  {/snippet}
</Tooltip>
