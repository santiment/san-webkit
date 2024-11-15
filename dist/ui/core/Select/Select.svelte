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
    onSelectedChange?: (value: Selected<T> | undefined) => void
    triggerClass?: string
    contentClass?: string
  }

  let {
    items,
    triggerClass,
    contentClass,
    selected = $bindable(),
    onSelectedChange,
  }: Props = $props()
</script>

<Select.Root bind:selected {items} {onSelectedChange}>
  <Select.Trigger asChild let:builder>
    <Button variant="border" {...builder} class={cn('gap-2 fill-fiord px-3', triggerClass)}>
      <Select.Value />
      <Svg id="arrow-down" w="12" />
    </Button>
  </Select.Trigger>

  <Select.Content
    class="z-10 overflow-auto rounded border bg-white p-2"
    sideOffset={8}
    fitViewport
    transition={flyAndScale}
  >
    {#each items as { value, label }}
      <Select.Item
        {value}
        {label}
        class={cn('z-50 cursor-pointer rounded px-3 py-2 hover:bg-athens', contentClass)}
      >
        {label}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
