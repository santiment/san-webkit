<script lang="ts">
  import type { Asset } from './api'

  import VirtualList from '@/ui/VirtualList/index.svelte'
  import Layout from './Layout.svelte'
  import AssetItem from './Asset.svelte'

  export let selected = null as Asset | null
  export let onSelect: (asset: Asset) => void

  const accessAsset = (item: Asset) => item
</script>

<Layout let:assets {accessAsset}>
  <VirtualList items={assets} renderAmount={20} let:item>
    <AssetItem {item} isActive={selected === item} on:click={() => onSelect(item)} />
  </VirtualList>
</Layout>
