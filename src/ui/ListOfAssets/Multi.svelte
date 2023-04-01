<script lang="ts">
  import type { Asset } from './api'

  import VirtualList from '@/ui/VirtualList/index.svelte'
  import Layout from './Layout.svelte'
  import AssetItem from './CheckboxAsset.svelte'

  export let selected = new Set<Asset>()
  export let onSelect: (assets: Asset[]) => void

  $: selections = selected.size
    ? [Item('title', 'Selected'), ...mapAssets(Array.from(selected), true)]
    : []

  function mapAssets(assets: Asset[], isActive = false) {
    return assets.map((asset) => Item('item', asset, isActive))
  }

  const accessAsset = ({ value }: ItemType<'item'>) => value

  function filterSelections(items: ItemType<'item'>[]) {
    return items.filter(({ value }) => selected.has(value) === false)
  }

  function onClick(asset: Asset) {
    if (selected.has(asset)) selected.delete(asset)
    else selected.add(asset)

    selected = selected
    onSelect(Array.from(selected))
  }

  type ItemType<T extends 'title' | 'item'> = {
    type: T
    value: T extends 'title' ? string : Asset
    isActive: boolean
  }
  const Item = <T extends 'title' | 'item'>(
    type: ItemType<T>['type'],
    value: ItemType<T>['value'],
    isActive = false,
  ) => ({ type, value, isActive })
</script>

<Layout {accessAsset} mapItems={mapAssets} let:assets>
  {@const items = [...selections, Item('title', 'Assets'), ...filterSelections(assets)]}

  <VirtualList {items} renderAmount={30} let:item>
    {@const { type, value, isActive } = item}

    {#if type === 'item'}
      <AssetItem item={value} {isActive} on:click={() => onClick(value)} />
    {:else}
      <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{value}</h4>
    {/if}
  </VirtualList>
</Layout>
