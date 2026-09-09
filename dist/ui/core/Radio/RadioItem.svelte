<script lang="ts">
  import type { Snippet } from 'svelte'

  import { RadioGroup, type RadioGroupItemProps } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  type TProps = Omit<RadioGroupItemProps, 'children'> & {
    class?: string
    children: Snippet
  }

  let { class: className, children: label, ...rest }: TProps = $props()
</script>

<RadioGroup.Item
  class={cn('group flex w-full items-center gap-4 text-base text-rhino', className)}
  {...rest}
>
  {#snippet children({ checked })}
    <span
      class={cn(
        'flex h-4 w-4 min-w-4 items-center justify-center rounded-full transition-colors',
        'group-focus-visible:ring-2 group-focus-visible:ring-green group-focus-visible:ring-offset-1',
        checked ? 'bg-green' : 'bg-white',
      )}
    >
      {#if checked}
        <span class="h-2 w-2 rounded-full bg-white"></span>
      {/if}
    </span>

    {@render label()}
  {/snippet}
</RadioGroup.Item>
