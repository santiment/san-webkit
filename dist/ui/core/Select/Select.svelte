<script lang="ts">
  import type { Selected } from 'bits-ui'

  import { Select } from 'bits-ui'

  import { cn, flyAndScale } from '../../utils/index.js'
  import Button from '../Button/index.js'
  import Svg from '../Svg/index.js'

  type T = $$Generic
  type Props = {
    items: Selected<T>[]
    selected?: Selected<T>
    onSelect?: (value: Selected<T> | undefined) => void
    triggerClass?: string
    contentClass?: string
  }

  let { items, triggerClass, contentClass, selected = $bindable(), onSelect }: Props = $props()

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
      <Button variant="border" {...props} class={cn('gap-2 fill-fiord px-3', triggerClass)}>
        {selected?.label}
        <Svg id="arrow-down" w="12" />
      </Button>
    {/snippet}
  </Select.Trigger>

  <Select.Content
    class="z-10 overflow-auto rounded border bg-white p-2"
    sideOffset={8}
    collisionPadding={8}
    forceMount
  >
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <div {...props} transition:flyAndScale bind:this={contentNode}>
            {#each items as item}
              <Select.Item
                value={item.value as string}
                label={item.label}
                onclick={() => onItemSelect(item)}
                class={cn(
                  'z-50 cursor-pointer rounded px-3 py-2 hover:bg-athens [&[data-selected]]:text-green',
                  contentClass,
                )}
              >
                {item.label}
              </Select.Item>
            {/each}
          </div>
        </div>
      {/if}
    {/snippet}
  </Select.Content>
</Select.Root>
