<script>import VirtualList from './../../ui/VirtualList/_index.svelte';
import Layout from './Layout.svelte';
import { TABS } from './Tabs.svelte';
import AssetItem from './CheckboxAsset.svelte';
export let selected = new Set();
export let tabs = TABS;
export let onSelect;
export let onEscape = undefined;

$: selections = selected.size ? [Item('title', 'Selected'), ...mapAssets(Array.from(selected), true)] : [];

function mapAssets(assets, isActive = false) {
  return assets.map(asset => Item('item', asset, isActive));
}

const accessAsset = ({
  value
}) => value;

function filterSelections(items) {
  return items.filter(({
    value
  }) => selected.has(value) === false);
}

function onClick(asset) {
  if (selected.has(asset)) selected.delete(asset);else selected.add(asset);
  selected = selected;
  onSelect(Array.from(selected));
}

function onTabSelect() {
  selected = new Set();
}

const Item = (type, value, isActive = false) => ({
  type,
  value,
  isActive
});</script>

<Layout let:assets {accessAsset} mapItems={mapAssets} {tabs} {onEscape} {onTabSelect}>
  {@const items = [...selections, Item('title', 'Assets'), ...filterSelections(assets)]}

  <VirtualList let:item itemHeight={32} {items} renderAmount={20}>
    {@const { type, value, isActive } = item}

    {#if type === 'item'}
      <AssetItem item={value} {isActive} on:click={() => onClick(value)} />
    {:else}
      <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{value}</h4>
    {/if}
  </VirtualList>
</Layout>
