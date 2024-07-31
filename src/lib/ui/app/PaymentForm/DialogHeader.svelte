<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  let { screens, active = $bindable() }: { screens: string[]; active: string } = $props()

  const { Controller } = getDialogControllerCtx()
</script>

<div class="flex items-center justify-between border-b px-6 py-4">
  <Svg illus id="santiment-sanbase" w="171" h="20"></Svg>

  <nav class="flex gap-4 fill-waterloo font-medium text-waterloo center">
    {#each screens as screen, i (screen)}
      {#if i > 0}
        <Svg id="arrow-right" w="5" h="8"></Svg>
      {/if}

      <Button class={cn(screen === active && 'text-rhino')} onclick={() => (active = screen)}>
        {screen}
      </Button>
    {/each}
  </nav>

  <Button variant="border" onclick={Controller.close}>Cancel</Button>
</div>
