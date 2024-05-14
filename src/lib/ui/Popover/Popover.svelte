<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { Popover } from 'bits-ui'
  import { fade } from 'svelte/transition'
  import Trigger from './Trigger.svelte'
  import { cn } from '../utils'

  let {
    class: className,
    content,
    children: _children,
  }: {
    class?: string
    children: ComponentProps<Trigger>['children']
    content: Snippet<[{ close: () => void }]>
  } = $props()

  let isOpened = $state(false)
</script>

<Popover.Root bind:open={isOpened}>
  <Popover.Trigger class="hidden" asChild let:builder>
    <Trigger {builder}>
      {#snippet children({ ref })}
        {@render _children({ ref })}
      {/snippet}
    </Trigger>
  </Popover.Trigger>

  <Popover.Content
    transition={(node) => fade(node, { duration: 65 })}
    class={cn('z-10 flex rounded border bg-white p-2 shadow', className)}
    sideOffset={8}
  >
    {@render content({ close: () => (isOpened = false) })}
  </Popover.Content>
</Popover.Root>
