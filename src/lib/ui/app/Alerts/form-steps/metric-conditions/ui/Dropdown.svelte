<script lang="ts">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  type T = $$Generic

  type TProps = {
    class?: string
    items: T[]
    selected: T
    label: Snippet<[T]>
    onSelect: (item: T) => void
  }

  const { class: className, items, selected, label, onSelect }: TProps = $props()

  let isOpened = $state(false)
</script>

<article class={cn('relative flex', className)}>
  <Popover bind:isOpened align="start" contentProps={{ strategy: 'absolute' }} matchTriggerWidth>
    {#snippet children({ props })}
      <Button
        {...props}
        variant="border"
        class="flex-1 justify-between hover:border-green hover:bg-white"
      >
        {@render label(selected)}
        <Svg id="arrow-down" w="8" class={cn(isOpened && 'rotate-180')} />
      </Button>
    {/snippet}

    {#snippet content({ close })}
      <section class="flex flex-col">
        {#each items as item}
          <Button
            onclick={() => {
              onSelect(item)
              close()
            }}
          >
            {@render label(item)}
          </Button>
        {/each}
      </section>
    {/snippet}
  </Popover>
</article>
