<script lang="ts">
  import type { Asset } from './types'

  import VirtualList from '@/ui/VirtualList/index.svelte'
  import Layout from './Layout.svelte'
  import { TABS } from './Tabs.svelte'
  import AssetItem from './Asset.svelte'

  export let selected = null as Asset | null
  export let tabs = TABS
  export let onSelect: (asset: Asset) => void
  export let onEscape = undefined as undefined | ((...args: any[]) => any)

  const accessAsset = (item: Asset) => item
</script>

<Layout let:assets {accessAsset} {tabs} {onEscape}>
  <VirtualList itemHeight={32} items={assets} renderAmount={20} let:item>
    <AssetItem {item} isActive={selected === item} on:click={() => onSelect(item)} />
  </VirtualList>
</Layout>
