<script lang="ts">
  import type { TAsset, TAssetSlug } from '../../../ctx/assets/api.js'
  import type { VListHandle } from 'virtua/svelte'

  import VirtualList from '../VirtualList/VirtualList.svelte'
  import { useAssetsCtx } from '../../../ctx/assets/index.svelte.js'
  import Button from '../../core/Button/Button.svelte'
  import Checkbox from '../../core/Checkbox/Checkbox.svelte'

  import Layout from './Layout.svelte'
  import AssetItem from './AssetItem.svelte'

  type TProps = {
    selected: Set<TAssetSlug>
    onSelect: (slug: TAssetSlug) => void
    resetSelections: () => void
    hasSearch?: boolean
    hasTabs?: boolean
    hasResetButton?: boolean
    keepSelectedInList?: boolean
    recents?: TAsset[]
  }

  const {
    selected,
    onSelect,
    resetSelections,
    hasSearch = false,
    hasTabs = false,
    hasResetButton = false,
    keepSelectedInList = false,
    recents = [],
  }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx.get()

  let vlistHandle = $state<VListHandle>()

  type ItemType<T extends 'title' | 'item' | 'reset'> = {
    type: T
    value: T extends 'item' ? TAsset : string
    isActive: boolean
    key?: string
  }
  const Item = <T extends 'title' | 'item' | 'reset'>(
    type: ItemType<T>['type'],
    value: ItemType<T>['value'],
    isActive = false,
    key?: string,
  ) => ({ type, value, isActive, key })

  const selectedAssets = $derived(
    Array.from(selected)
      .map((slug) => getAssetBySlug(slug))
      .filter((asset): asset is Exclude<typeof asset, undefined> => !!asset),
  )
  const selections = $derived(
    selected.size
      ? [Item('title', 'Selected'), ...mapAssets(selectedAssets, true, 'selected')]
      : [],
  )
  const recentSection = $derived(
    recents.length ? [Item('title', 'Recents'), ...mapAssets(recents, false, 'recent')] : [],
  )

  function mapAssets(assets: TAsset[], isActive = false, key = '') {
    return assets.map((asset) => Item('item', asset, isActive, asset.slug + key))
  }

  function filterSelections(items: ItemType<'item'>[]) {
    if (keepSelectedInList) return items

    return items.filter(({ value }) => selected.has(value.slug) === false)
  }

  function onTabSelect() {
    vlistHandle?.scrollToIndex(0)
    resetSelections?.()
  }
</script>

<Layout mapItems={mapAssets} {hasSearch} {hasTabs} {onTabSelect}>
  {#snippet children({ assets })}
    {@const _items = [
      ...selections,
      ...recentSection,
      Item('title', 'Assets'),
      ...filterSelections(assets),
    ]}
    {@const items = hasResetButton ? [Item('reset', ''), ..._items] : _items}

    <VirtualList
      bind:handle={vlistHandle}
      class="pt-4"
      itemHeight={36}
      data={items}
      getKey={({ value, key }) => key ?? (typeof value === 'string' ? value : value.slug)}
    >
      {#snippet children({ type, value, isActive })}
        {#if type === 'item'}
          <AssetItem item={value} onclick={() => onSelect(value.slug)}>
            <Checkbox isActive={isActive || selected.has(value.slug)} />
          </AssetItem>
        {:else if type === 'title'}
          <h4 class="mb-4 text-xs font-medium text-waterloo">{value}</h4>
        {:else if type === 'reset' && selections.length}
          <Button variant="border" class="mb-2 text-center" onclick={resetSelections}>
            Reset to All projects
          </Button>
        {/if}
      {/snippet}
    </VirtualList>
  {/snippet}
</Layout>
