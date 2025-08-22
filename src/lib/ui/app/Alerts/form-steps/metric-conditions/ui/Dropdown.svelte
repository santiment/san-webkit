<script lang="ts" generics="T extends string | number">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { cn } from '$ui/utils/index.js'

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
  <Popover
    bind:isOpened
    align="start"
    contentProps={{ strategy: 'absolute', class: 'border' }}
    matchTriggerWidth
  >
    {#snippet children({ props })}
      <Button
        {...props}
        variant="border"
        class={cn(
          'flex-1 justify-between px-[11px] [&>svg]:transition-transform',
          isOpened && '[&>svg]:rotate-180',
        )}
        icon="arrow-down"
        iconSize="8"
        iconOnRight
      >
        {@render label(selected)}
      </Button>
    {/snippet}

    {#snippet content({ close })}
      <section class="flex w-full flex-col gap-0.5">
        {#each items as item}
          <Button
            class={cn('px-2', selected === item && 'bg-porcelain hover:bg-porcelain')}
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
