<script lang="ts">
  import type { TAssetSlug } from '../../../ctx/assets/api.js'

  import VirtualList from '../VirtualList/VirtualList.svelte'

  import Layout from './Layout.svelte'
  import AssetItem from './AssetItem.svelte'

  type TProps = {
    class?: string
    itemClass?: string
    selected: TAssetSlug | undefined
    onSelect: (slug: TAssetSlug) => void
    hasSearch?: boolean
    hasTabs?: boolean
  }

  const {
    class: className,
    itemClass,
    selected,
    onSelect,
    hasSearch = false,
    hasTabs = false,
  }: TProps = $props()
</script>

<Layout class={className} mapItems={(assets) => assets} {hasSearch} {hasTabs}>
  {#snippet children({ assets })}
    <VirtualList class="pt-4 md:pt-6" itemHeight={36} data={assets} getKey={({ slug }) => slug}>
      {#snippet children(item)}
        <AssetItem
          class={itemClass}
          {item}
          isActive={selected === item.slug}
          onclick={() => onSelect(item.slug)}
        />
      {/snippet}
    </VirtualList>
  {/snippet}
</Layout>
