<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'

  import { onDestroy, type Snippet } from 'svelte'
  import { noop } from 'rxjs'

  import { exactObjectKeys } from '$lib/utils/types/index.js'
  import { useAssetsCtx, type TAssetCategory } from '$lib/ctx/assets/index.svelte.js'
  import Input from '$ui/core/Input/Input.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.js'

  import Tabs from './Tabs.svelte'

  type T = $$Generic

  type TProps = {
    mapItems: (assets: TAsset[]) => T[]
    onTabSelect?: (tab: TAssetCategory) => void
    hasSearch?: boolean
    children: Snippet<[{ assets: T[] }]>
  }

  const {
    mapItems = (assets) => assets as T[],
    onTabSelect = noop,
    hasSearch = true,
    children,
  }: TProps = $props()

  const { filter, onInput, onKeyUp, clear } = useSearchCtx<TAsset>({
    getCompareValues: ({ slug, ticker, name }) => [slug, ticker, name],
  })

  const { assets } = useAssetsCtx.get()

  const tabKeys = exactObjectKeys(assets)

  let tab = $state(tabKeys[0])

  const groupAssets = $derived(assets[tab])
  const filteredAssets = $derived(filter(groupAssets.$))
  const items = $derived(mapItems(filteredAssets))

  function handleTabSelect(_tab: TAssetCategory) {
    tab = _tab
    onTabSelect(tab)
  }

  onDestroy(() => {
    clear()
  })
</script>

<section class="flex h-full flex-1 flex-col">
  {#if hasSearch}
    <Input
      class="mb-3"
      icon="search"
      placeholder="Search for asset"
      oninput={onInput}
      onkeyup={onKeyUp}
    />

    <Tabs tabs={tabKeys} selected={tab} onSelect={handleTabSelect} />
  {/if}

  <section class="relative flex-1">
    {@render children({ assets: items })}
  </section>
</section>
