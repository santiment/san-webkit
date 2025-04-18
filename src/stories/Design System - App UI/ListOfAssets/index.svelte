<script lang="ts">
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { ListOfAssets, ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'
  import Checkbox from '$ui/core/Checkbox/Checkbox.svelte'
  import { SvelteSet } from 'svelte/reactivity'

  let selectedSingle = $state<string>()
  let selectedMulti = new SvelteSet<string>()

  let hasSearch = $state(true)
  let hasResetButton = $state(false)
  let keepSelectedInList = $state(false)

  useAssetsCtx.set()
</script>

<main class="flex h-screen gap-6 p-5">
  <section class="flex flex-1 flex-col gap-4">
    <h3 class="text-lg">Selected Single Asset: {selectedSingle}</h3>

    <ListOfAssets selected={selectedSingle} onSelect={(slug) => (selectedSingle = slug)} />
  </section>

  <section class="flex flex-1 flex-col gap-4">
    <h3 class="text-lg">Selected Multi Assets: {Array.from(selectedMulti)}</h3>

    <div>
      <div class="flex flex-col">
        {@render setting('hasSearch', hasSearch, (v) => (hasSearch = v))}
        {@render setting('hasResetButton', hasResetButton, (v) => (hasResetButton = v))}
        {@render setting('keepSelectedInList', keepSelectedInList, (v) => (keepSelectedInList = v))}
      </div>
    </div>

    <ListOfAssetsMulti
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
    />
  </section>
</main>

{#snippet setting(title: string, state: boolean, onChange: (v: boolean) => void)}
  <label class="flex items-center">
    {title}
    <Checkbox isActive={state} onCheckedChange={onChange} />
  </label>
{/snippet}
