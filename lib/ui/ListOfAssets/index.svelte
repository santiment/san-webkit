<script>import VirtualList from './../../ui/VirtualList/index.svelte';
import Layout from './Layout.svelte';
import { TABS } from './Tabs.svelte';
import AssetItem from './Asset.svelte';
export let selected = null;
export let tabs = TABS;
export let onSelect;
export let onEscape = undefined;
const accessAsset = (item) => item;
</script>

<Layout let:assets {accessAsset} {tabs} {onEscape}>
  <VirtualList itemHeight={32} items={assets} renderAmount={20} let:item>
    <AssetItem {item} isActive={selected === item} on:click={() => onSelect(item)} />
  </VirtualList>
</Layout>
