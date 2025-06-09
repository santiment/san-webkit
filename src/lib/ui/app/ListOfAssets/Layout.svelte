<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'

  import { onMount, type Snippet } from 'svelte'
  import { map, noop, pipe, switchMap, tap } from 'rxjs'

  import Input from '$ui/core/Input/Input.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'

  import Tabs, { tabKeys, TABS, type TabKey } from './Tabs.svelte'

  type T = $$Generic

  type TProps = {
    mapItems: (assets: TAsset[]) => T[]
    onTabSelect?: (tab: TabKey) => void
    hasSearch: boolean
    hasTabs: boolean
    children: Snippet<[{ assets: T[] }]>
  }

  const {
    mapItems = (assets) => assets as T[],
    onTabSelect = noop,
    hasSearch,
    hasTabs,
    children,
  }: TProps = $props()

  const { filter, onInput, onKeyUp, clear } = useSearchCtx<TAsset>({
    getCompareValues: ({ slug, ticker, name }) => [slug, ticker, name],
  })

  let tab = $state(tabKeys[0])
  let groupAssets = $state<TAsset[]>()
  let loading = $state(false)

  const filteredAssets = $derived(filter(groupAssets ?? []))
  const items = $derived(mapItems(filteredAssets))

  function handleTabSelect(_tab: TabKey) {
    tab = _tab
    onTabSelect(tab)
  }

  type LoadProps = { tab: TabKey }
  const loadTabAssets = useObserveFnCall<LoadProps>(() => {
    return pipe(
      tap(() => (loading = true)),
      map(({ tab }) => TABS[tab].query),
      switchMap((query) => query()()),
      tap((assets) => (groupAssets = assets)),
      tap(() => (loading = false)),
    )
  })

  $effect(() => {
    loadTabAssets({ tab })
  })

  onMount(() => {
    return () => clear()
  })
</script>

<section class="flex h-full flex-1 flex-col">
  <header class="flex flex-col gap-3 px-2">
    {#if hasSearch}
      <Input icon="search" placeholder="Search project" oninput={onInput} onkeyup={onKeyUp} />
    {/if}

    {#if hasTabs}
      <Tabs selected={tab} onSelect={handleTabSelect} />
    {/if}
  </header>

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
