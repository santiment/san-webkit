<script lang="ts">
  import type { TTrendState } from '../schema.js'
  import type { TAssetSlug } from '$lib/ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'

  type TProps = {
    state: { $$: TTrendState }
  }

  const { state }: TProps = $props()

  const selected = new SvelteSet('slug' in state.$$.target ? state.$$.target.slug : [])

  $effect(() => {
    state.$$.target = { slug: Array.from(selected) }
  })

  function onSelect(slug: TAssetSlug) {
    if (selected.has(slug)) {
      selected.delete(slug)
    } else {
      selected.add(slug)
    }
  }
</script>

<ListOfAssetsMulti {selected} {onSelect} resetSelections={() => selected.clear()} />
