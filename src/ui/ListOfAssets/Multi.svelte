<script lang="ts">
  import type { Asset } from './types'

  import VirtualList from '@/ui/VirtualList/index.svelte'
  import Layout from './Layout.svelte'
  import { TABS } from './Tabs.svelte'
  import AssetItem from './CheckboxAsset.svelte'

  export let selected = new Set<Asset>()
  export let tabs = TABS
  export let onSelect: (assets: Asset[], asset?: Asset) => void
  export let onEscape = undefined as undefined | ((...args: any[]) => any)
  export let hasSearch = true
  export let hasResetButton = false
  export let keepSelectedInList = false
  export let recents = [] as Asset[]

  $: selectedSlugs = new Set(Array.from(selected).map(({ slug }) => slug))
  $: selections = selected.size
    ? [Item('title', 'Selected'), ...mapAssets(Array.from(selected), true)]
    : []
  $: recentSection = recents.length ? [Item('title', 'Recents'), ...mapAssets(recents, false)] : []

  function mapAssets(assets: Asset[], isActive = false) {
    return assets.map((asset) => Item('item', asset, isActive))
  }

  const accessAsset = ({ value }: ItemType<'item'>) => value

  function filterSelections(items: ItemType<'item'>[]) {
    if (keepSelectedInList) return items

    return items.filter(({ value }) => selectedSlugs.has(value.slug) === false)
  }

  function onClick(asset: Asset) {
    asset = Array.from(selected).find((item) => item.slug === asset.slug) || asset // HACK: Finding object in selections by referencing slug. Needed for recents to work [@vanguard]

    if (selected.has(asset)) selected.delete(asset)
    else selected.add(asset)

    selected = selected
    onSelect(Array.from(selected), asset)
  }

  function resetSelections() {
    selected = new Set()
    onSelect(Array.from(selected))
  }

  type ItemType<T extends 'title' | 'item' | 'reset'> = {
    type: T
    value: T extends 'item' ? Asset : string
    isActive: boolean
  }
  const Item = <T extends 'title' | 'item' | 'reset'>(
    type: ItemType<T>['type'],
    value: ItemType<T>['value'],
    isActive = false,
  ) => ({ type, value, isActive })
</script>

<Layout
  let:assets
  {accessAsset}
  mapItems={mapAssets}
  {hasSearch}
  {tabs}
  {onEscape}
  onTabSelect={resetSelections}
>
  {@const _items = [
    ...selections,
    ...recentSection,
    Item('title', 'Assets'),
    ...filterSelections(assets),
  ]}
  {@const items = hasResetButton ? [Item('reset', ''), ..._items] : _items}

  <VirtualList let:item itemHeight={36} {items} renderAmount={20}>
    {@const { type, value, isActive } = item}

    {#if type === 'item'}
      <AssetItem
        item={value}
        isActive={isActive || selectedSlugs.has(value.slug)}
        on:click={() => onClick(value)}
      />
    {:else if type === 'title'}
      <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{value}</h4>
    {:else if type === 'reset' && selections.length}
      <button class="btn-2 txt-center mrg-s mrg--b" on:click={resetSelections}
        >Reset to All projects</button
      >
    {/if}
  </VirtualList>
</Layout>
