<script lang="ts">
  import type { TAssetSlug } from '$lib/ctx/assets/api.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { ListOfAssets, ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'
  import Checkbox from '$ui/core/Checkbox/Checkbox.svelte'
  import { SvelteSet } from 'svelte/reactivity'

  type TProps = {
    isMulti: boolean
  }

  const { isMulti }: TProps = $props()

  let selectedSingle = $state<TAssetSlug>()
  let selectedMulti = new SvelteSet<TAssetSlug>()

  let hasSearch = $state(false)
  let hasTabs = $state(false)
  let hasResetButton = $state(false)
  let keepSelectedInList = $state(false)

  useAssetsCtx.set()
</script>

<main class="flex h-screen gap-6 p-5">
  <section class="flex flex-1 flex-col gap-4">
    <h3 class="text-lg">
      {#if isMulti}
        Selected Multi Assets: {Array.from(selectedMulti)}
      {:else}
        Selected Single Asset: {selectedSingle}
      {/if}
    </h3>

    <div>
      <div class="flex flex-col">
        {@render setting('hasSearch', hasSearch, (v) => (hasSearch = v))}
        {@render setting('hasTabs', hasTabs, (v) => (hasTabs = v))}
        {@render setting('hasResetButton', hasResetButton, (v) => (hasResetButton = v))}
        {@render setting('keepSelectedInList', keepSelectedInList, (v) => (keepSelectedInList = v))}
      </div>
    </div>

    <section class="flex h-full gap-5">
      <section class="flex h-full max-w-96 flex-1 flex-col rounded-lg border">
        <h4 class="p-2 text-lg">Regular</h4>
        {@render list()}
      </section>

      <section class="flex h-full max-w-96 flex-1 flex-col rounded-lg border dark:bg-athens">
        <h4 class="p-2 text-lg">Tinted in Dark mode</h4>
        {@render list({ itemClass: 'dark:hover:bg-porcelain' })}
      </section>
    </section>
  </section>
</main>

{#snippet list({ itemClass }: { itemClass?: string } = {})}
  {#if isMulti}
    <ListOfAssetsMulti
      {itemClass}
      selected={selectedMulti}
      resetSelections={() => selectedMulti.clear()}
      onSelect={(slug) => {
        if (selectedMulti.has(slug)) {
          selectedMulti.delete(slug)
        } else {
          selectedMulti.add(slug)
        }
      }}
      {keepSelectedInList}
      {hasSearch}
      {hasResetButton}
      {hasTabs}
    />
  {:else}
    <ListOfAssets
      selected={selectedSingle}
      onSelect={(slug) => (selectedSingle = slug)}
      {hasSearch}
      {hasTabs}
    />
  {/if}
{/snippet}

{#snippet setting(title: string, state: boolean, onChange: (v: boolean) => void)}
  <label class="flex items-center">
    {title}
    <Checkbox isActive={state} onCheckedChange={onChange} />
  </label>
{/snippet}
