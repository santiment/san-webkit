<script lang="ts">
  import type { TAsset, TAssetSlug } from '$lib/ctx/assets/api.js'
  import type { VListHandle } from 'virtua/svelte'

  import VirtualList from '$ui/app/VirtualList/VirtualList.svelte'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Checkbox from '$ui/core/Checkbox/Checkbox.svelte'
  import { cn } from '$ui/utils/index.js'

  import Layout from './Layout.svelte'
  import AssetItem from './AssetItem.svelte'

  type TProps = {
    class?: string
    itemClass?: string
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
    class: className,
    itemClass,
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

<Layout class={className} mapItems={mapAssets} {hasSearch} {hasTabs} {onTabSelect}>
  {#snippet children({ assets })}
    {@const _items = [
      ...selections,
      ...recentSection,
      Item('title', 'All projects'),
      ...filterSelections(assets),
    ]}
    {@const items = hasResetButton ? [Item('reset', ''), ..._items] : _items}

    <VirtualList
      bind:handle={vlistHandle}
      class="pt-4 md:pt-6"
      itemHeight={36}
      data={items}
      getKey={({ value, key }) => key ?? (typeof value === 'string' ? value : value.slug)}
    >
      {#snippet children({ type, value, isActive }, i)}
        {#if type === 'item'}
          <AssetItem
            class={cn('group/label', itemClass)}
            item={value}
            onclick={() => onSelect(value.slug)}
          >
            <Checkbox isActive={isActive || selected.has(value.slug)} />
          </AssetItem>
        {:else if type === 'title'}
          <h4
            class={cn(
              'mb-2.5 px-2 text-xs font-semibold text-waterloo md:px-3 md:text-sm md:font-normal',
              i !== 0 && 'mt-3 md:mt-4',
            )}
          >
            {value}
          </h4>
        {:else if type === 'reset' && selections.length}
          <Button variant="border" class="mx-2 mb-2 text-center" onclick={resetSelections}>
            Reset to All projects
          </Button>
        {/if}
      {/snippet}
    </VirtualList>
  {/snippet}
</Layout>
