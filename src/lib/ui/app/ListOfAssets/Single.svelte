<script lang="ts">
  import VirtualList from '$ui/app/VirtualList/VirtualList.svelte'

  import Layout from './Layout.svelte'
  import AssetItem from './AssetItem.svelte'

  type TProps = {
    selected?: string
    onSelect: (slug: string) => void
  }

  const { selected, onSelect }: TProps = $props()
</script>

<Layout mapItems={(assets) => assets}>
  {#snippet children({ assets })}
    <VirtualList class="pt-4" itemHeight={32} data={assets} getKey={({ slug }) => slug}>
      {#snippet children(item)}
        <AssetItem {item} isActive={selected === item.slug} onclick={() => onSelect(item.slug)} />
      {/snippet}
    </VirtualList>
  {/snippet}
</Layout>
