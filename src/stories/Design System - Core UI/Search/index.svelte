<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { useSearchCtx } from '$lib/ctx/search/index.svelte.js'
  import AssetLogo from '$ui/app/AssetLogo/AssetLogo.svelte'
  import VirtualList from '$ui/app/VirtualList/VirtualList.svelte'
  import Input from '$ui/core/Input/Input.svelte'

  const { assets } = useAssetsCtx()

  const { filter, oninput, onkeyup } = useSearchCtx<TAsset>({
    getCompareValues: ({ slug, ticker, name }) => [slug, ticker, name],
  })

  const filtered = $derived(filter(assets.$))
</script>

<main class="flex h-96 flex-col p-5">
  <Input icon="search" placeholder="Search for asset" {oninput} {onkeyup} />

  <section class="flex-1">
    <VirtualList data={filtered} itemHeight={40} getKey={(item) => item.slug} class="p-6">
      {#snippet children({ slug, ticker, name }, i)}
        <article class="flex gap-2">
          <AssetLogo {slug} />
          <span>{name} ({ticker})</span>
        </article>
      {/snippet}
    </VirtualList>
  </section>
</main>
