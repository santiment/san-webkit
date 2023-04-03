<script lang="ts">
  import type { Asset } from './api'

  import { noop } from '@/utils'
  import { debounce$ } from '@/utils/fn'
  import Search from '@/ui/Search.svelte'
  import Tabs, { TABS } from './Tabs.svelte'

  // import { projects } from '../../../stories/allProjects'

  type T = $$Generic

  export let mapItems = ((assets) => assets) as (assets: Asset[]) => T[]
  export let accessAsset: (item: T) => Asset
  export let tabs = TABS
  export let onEscape = noop

  let tab = tabs[0]
  let assets = [] as Asset[]
  let searchTerm = ''
  let loading = true

  $: getData(tab[1])
  $: items = mapItems(assets)
  $: filtered = searchTerm ? filter(items) : items

  const onSearch = debounce$(250, (value: string) => (searchTerm = value))
  const onInput = ({ currentTarget }) => $onSearch(currentTarget.value)

  const match = (value: string, target: string) => target.toLowerCase().includes(value)

  const matchAsset = (value: string, { slug, ticker, name }: Asset) =>
    match(value, slug) || match(value, ticker) || match(value, name)

  function filter(items: T[]) {
    const value = searchTerm.toLowerCase()
    return items.filter((item) => matchAsset(value, accessAsset(item)))
  }

  function getData(dataQuery: () => Promise<Asset[]>) {
    loading = true
    dataQuery()
      .then((data) => (assets = data))
      .finally(() => (loading = false))
  }

  function onKeyUp({ currentTarget, code }: KeyboardEvent) {
    if (!currentTarget) return

    const inputNode = currentTarget as HTMLInputElement

    if (code === 'Escape') {
      if (searchTerm) inputNode.value = searchTerm = ''
      else onEscape()
    }
  }
</script>

<div class="column">
  <Search placeholder="Search for asset" on:input={onInput} on:keyup={onKeyUp} />

  <Tabs {tabs} bind:selected={tab} />

  <section class="relative" class:data-loading={loading}>
    <slot assets={filtered} />

    {#if loading}
      <div class="loading-spin" />
    {/if}
  </section>
</div>

<style>
  .column {
    flex: 1;
    height: 100%;
  }

  section {
    flex: 1;
  }

  section :global(virtual-list-items) {
    padding: 16px 0;
  }

  .data-loading {
    opacity: 0.6;
  }

  .loading-spin {
    --loading-size: 32px;
    border-width: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
</style>
