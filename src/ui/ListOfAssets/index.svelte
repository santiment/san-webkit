<script lang="ts">
  import type { Asset } from './api'

  import VirtualList from '@/ui/VirtualList/_index.svelte'
  import Layout from './Layout.svelte'
  import AssetItem from './Asset.svelte'

  export let selected = null as Asset | null
  export let onSelect: (asset: Asset) => void
  export let onEscape: (...args: any[]) => any

  const accessAsset = (item: Asset) => item
</script>

<Layout let:assets {accessAsset} {onEscape}>
  <VirtualList itemHeight={32} items={assets} renderAmount={20} let:item>
    <AssetItem {item} isActive={selected === item} on:click={() => onSelect(item)} />
  </VirtualList>
</Layout>
