<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'

  import { onDestroy, type Snippet } from 'svelte'
  import { noop } from 'rxjs'

  import Input from '$ui/core/Input/Input.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.js'
  import { Query } from '$lib/api/executor.js'

  import Tabs, { tabKeys, TABS, type TabKey } from './Tabs.svelte'

  type T = $$Generic

  type TProps = {
    mapItems: (assets: TAsset[]) => T[]
    onTabSelect?: (tab: TabKey) => void
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

  let tab = $state(tabKeys[0])
  let groupAssets = $state<TAsset[]>()
  let loading = $state(false)

  $effect(() => {
    loadTabAssets(tab)
  })

  const filteredAssets = $derived(filter(groupAssets ?? []))
  const items = $derived(mapItems(filteredAssets))

  function handleTabSelect(_tab: TabKey) {
    tab = _tab
    onTabSelect(tab)
  }

  function loadTabAssets(tab: TabKey) {
    const query = TABS[tab].query

    loading = true
    query(Query)()
      .then((assets) => (groupAssets = assets))
      .finally(() => (loading = false))
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

    <Tabs selected={tab} onSelect={handleTabSelect} />
  {/if}

  <section class="relative flex-1">
    {#if loading}
      <section class="flex h-full w-full items-center justify-center p-4">
        <div style:--loading-size="32px" class="loading-spin"></div>
      </section>
    {:else}
      {@render children({ assets: items })}
    {/if}
  </section>
</section>
