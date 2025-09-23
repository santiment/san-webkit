<script lang="ts">
  import Button from '../../../../../core/Button/Button.svelte'
  import Svg from '../../../../../core/Svg/Svg.svelte'
  import { cn } from '../../../../../utils/index.js'

  type TProps = {
    label: string
    onclick?: () => void
  }

  const { label, onclick }: TProps = $props()
</script>

<Button
  variant="plain"
  size="auto"
  class={cn(
    'flex w-full cursor-auto flex-col items-stretch gap-1 rounded border fill-green px-4 py-2',
    onclick && 'cursor-pointer hover:border-green',
  )}
  {onclick}
>
  <div class="flex items-center justify-between">
    {label}

    {#if onclick}
      <Svg id="pencil" w="14" />
    {/if}
  </div>

  <p class="text-start text-xs text-waterloo">
    Notify me when an asset’s {label} moves a certain way
  </p>
</Button>
