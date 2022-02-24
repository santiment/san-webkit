<script lang="ts">
  import { onDestroy } from 'svelte'
  import { debounce } from '@/utils/fn'
  import InputWithIcon from '@/ui/InputWithIcon.svelte'
  import VirtualList from './index.svelte'

  let className = ''
  export { className as class }
  export let items: any[]
  export let key: string | undefined
  export let renderAmount = 10
  export let defaultItemHeight = 0
  export let maxHeight: number
  export let autoHeight = true
  export let autofocus = false
  export let placeholder = ''
  export let debounceTime = 180
  export let filter: (searchTerm: string, items: any[]) => any[]
  export let searchPosition: 'top' | 'bottom' = 'top'

  let filtered = items

  $: isSearchAtTop = searchPosition === 'top'

  const [filterItems, clearTimer] = debounce(debounceTime, (value: string) => {
    filtered = value ? filter(value, items) : items
  })

  const onInput = ({ currentTarget }) => filterItems(currentTarget.value)

  onDestroy(clearTimer)
</script>

{#if isSearchAtTop}
  <InputWithIcon
    icon="search"
    w="12"
    {placeholder}
    {autofocus}
    class="mrg-s mrg--b"
    on:input={onInput} />
{/if}

<VirtualList
  items={filtered}
  {key}
  {defaultItemHeight}
  {renderAmount}
  {autoHeight}
  {maxHeight}
  class={className}
  let:item>
  <slot {item} />
</VirtualList>

{#if !isSearchAtTop}
  <InputWithIcon
    icon="search"
    w="12"
    {placeholder}
    {autofocus}
    class="mrg-s mrg--t"
    on:input={onInput} />
{/if}
