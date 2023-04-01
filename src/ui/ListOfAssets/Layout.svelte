<script lang="ts">
  import type { Asset } from './api'

  import { debounce$ } from '@/utils/fn'
  import Search from '@/ui/Search.svelte'
  import Tabs from './Tabs.svelte'

  import { projects } from '../../../stories/allProjects'

  type T = $$Generic

  export let mapItems = ((assets) => assets) as (assets: Asset[]) => T[]
  export let accessAsset: (item: T) => Asset

  // let assets = [] as Asset[]
  let assets = projects as Asset[]
  let searchTerm = ''

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
</script>

<div class="column">
  <Search placeholder="Search for asset" on:input={onInput} />

  <Tabs />

  <section class="list">
    <slot assets={filtered} />
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

  .list :global(.list) {
    padding: 16px 0;
  }

  div :global(virtual-list-items) {
    padding: 16px 0;
  }
</style>
