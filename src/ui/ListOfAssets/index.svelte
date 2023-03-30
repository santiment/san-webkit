<script lang="ts">
  import type { Asset } from './api'

  import { debounce$ } from '@/utils/fn'
  import Search from '@/ui/Search.svelte'
  import VirtualList from '@/ui/VirtualList/index.svelte'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
  import Tabs from './Tabs.svelte'
  import AssetItem from './CheckboxAsset.svelte'

  export let items = [] as Asset[]
  let filtered = items

  const filterItems = debounce$(250, (value: string) => {
    filtered = value ? filter(items, value) : items
  })

  const match = (value: string, target: string) => target.toLowerCase().includes(value)

  function filter(items: Asset[], searchTerm: string) {
    const value = searchTerm.toLowerCase()
    return items.filter(
      ({ slug, ticker, name }) => match(value, slug) || match(value, ticker) || match(value, name),
    )
  }

  const onInput = ({ currentTarget }) => $filterItems(currentTarget.value)
</script>

<div class="column">
  <Search placeholder="Search for asset" on:input={onInput} />

  <Tabs />

  <section class="list">
    <VirtualList class="$style.virtual-list" items={filtered} key="slug" renderAmount={20} let:item>
      <AssetItem {item} />
    </VirtualList>
  </section>
</div>

<style>
  .column {
    flex: 1;
    height: 100%;
  }

  .list {
    flex: 1;
  }

  .virtual-list :global(.list) {
    padding: 8px 0 16px;
  }
</style>
