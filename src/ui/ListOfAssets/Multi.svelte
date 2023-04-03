<script lang="ts">
  import type { Asset } from './api'

  import VirtualList from '@/ui/VirtualList/_index.svelte'
  import Layout from './Layout.svelte'
  import { TABS } from './Tabs.svelte'
  import AssetItem from './CheckboxAsset.svelte'

  export let selected = new Set<Asset>()
  export let tabs = TABS
  export let onSelect: (assets: Asset[]) => void
  export let onEscape = undefined as undefined | ((...args: any[]) => any)

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

  function onTabSelect() {
    selected = new Set()
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

<Layout let:assets {accessAsset} mapItems={mapAssets} {tabs} {onEscape} {onTabSelect}>
  {@const items = [...selections, Item('title', 'Assets'), ...filterSelections(assets)]}

  <VirtualList let:item itemHeight={36} {items} renderAmount={20}>
    {@const { type, value, isActive } = item}

    {#if type === 'item'}
      <AssetItem item={value} {isActive} on:click={() => onClick(value)} />
    {:else}
      <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{value}</h4>
    {/if}
  </VirtualList>
</Layout>
