<script lang="ts">
  import { onMount } from 'svelte'

  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'
  import { useSearchCtx } from '../../../../../../../ctx/search/index.svelte.js'
  import Popover from '../../../../../../core/Popover/Popover.svelte'
  import Input from '../../../../../../core/Input/Input.svelte'
  import VirtualList from '../../../../../VirtualList/VirtualList.svelte'
  import Button from '../../../../../../core/Button/Button.svelte'

  type TProps = {
    selected: string | null
    slugs: string[]
    onSelect: (slug: string) => void
  }

  const { selected, slugs, onSelect }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()
  const { filter, clear, onInput, onKeyUp } = useSearchCtx<string>({
    getCompareValues: (slug) => {
      const asset = getAssetBySlug(slug)
      if (!asset) return slug

      return [asset.name, asset.slug, asset.ticker]
    },
  })

  const filtered = $derived(filter(slugs))
  const asset = $derived(selected ? getAssetBySlug(selected) : undefined)

  onMount(() => {
    return () => clear()
  })
</script>

<Popover align="start">
  {#snippet children({ props })}
    <Button
      {...props}
      variant="border"
      class="w-full justify-between hover:border-green hover:bg-white"
      icon="arrow-down"
      iconSize="8"
      iconOnRight
    >
      {#if asset}
        {asset.name}
      {:else}
        Select an asset
      {/if}
    </Button>
  {/snippet}

  {#snippet content({ close })}
    <section class="flex h-96 flex-col gap-2">
      <Input
        icon="search"
        oninput={onInput}
        onkeyup={onKeyUp}
        placeholder="Search assets"
        autofocus
      />

      <section class="flex-1">
        <VirtualList itemHeight={32} data={filtered} getKey={(slug) => slug}>
          {#snippet children(slug)}
            {@const item = getAssetBySlug(slug)}

            <Button
              class="h-auto w-full text-start"
              onclick={() => {
                onSelect(slug)
                close()
              }}
            >
              {item?.name} ({item?.ticker})
            </Button>
          {/snippet}
        </VirtualList>
      </section>
    </section>
  {/snippet}
</Popover>
