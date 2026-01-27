<script lang="ts">
  import type { SelectContentProps, Selected } from 'bits-ui'
  import type { ComponentProps, Snippet } from 'svelte'

  import { Select } from 'bits-ui'

  import { cn } from '../../utils/index.js'
  import Button from '../Button/index.js'
  import { flyAndScaleOutTransition } from '../../utils/transitions.js'

  type T = $$Generic
  type Props = {
    items: Selected<T>[]
    selected?: Selected<T>
    onSelect?: (value: Selected<T> | undefined) => void

    side?: SelectContentProps['side']
    align?: SelectContentProps['align']
    triggerClass?: string
    contentClass?: string

    option?: Snippet<[Selected<T>]>

    matchTriggerWidth?: boolean
  } & ComponentProps<typeof Button>

  let {
    items,
    triggerClass,
    contentClass,
    selected = $bindable(),
    side = 'bottom',
    align = 'center',
    matchTriggerWidth,

    onSelect,
    option,

    ...rest
  }: Props = $props()

  let contentNode: undefined | HTMLDivElement = $state.raw()

  $effect(() => {
    if (!contentNode) return

    // NOTE: This allows to keep Select autosized (auto height on small list and when fitting viewport)
    // but restricts default height for large lists
    if (contentNode.clientHeight > 300) contentNode.style.height = '300px'

    const selectedNode = contentNode.querySelector('[data-selected]')
    requestAnimationFrame(() => selectedNode?.scrollIntoView({ block: 'nearest' }))
  })

  function onItemSelect(item: Selected<T>) {
    if (selected === item) return

    selected = item
    onSelect?.(item)
  }
</script>

<Select.Root value={selected?.value as string | undefined} type="single">
  <Select.Trigger>
    {#snippet child({ props })}
      <Button variant="border" {...props} dropdown class={triggerClass} {...rest}>
        {#if rest.children}
          {@render rest.children()}
        {:else}
          {selected?.label}
        {/if}
      </Button>
    {/snippet}
  </Select.Trigger>

  <Select.Content
    class={cn(
      'z-20 overflow-auto rounded border bg-white p-2 shadow-dropdown dark:bg-athens dark:shadow-none',
      matchTriggerWidth && 'w-[--bits-floating-anchor-width]',
    )}
    sideOffset={8}
    collisionPadding={8}
    {side}
    {align}
    forceMount
  >
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <div
            {...props}
            class={cn('fly-and-scale-animation animated', props.class as string)}
            bind:this={contentNode}
            out:flyAndScaleOutTransition
          >
            {#each items as item}
              <Select.Item
                value={item.value as string}
                label={item.label}
                onclick={() => onItemSelect(item)}
                class={cn(
                  'z-50 cursor-pointer rounded px-3 py-2 text-black hover:bg-athens dark:hover:bg-porcelain [&[data-selected]]:text-green',
                  contentClass,
                )}
              >
                {#if option}
                  {@render option(item)}
                {:else}
                  {item.label}
                {/if}
              </Select.Item>
            {/each}
          </div>
        </div>
      {/if}
    {/snippet}
  </Select.Content>
</Select.Root>
