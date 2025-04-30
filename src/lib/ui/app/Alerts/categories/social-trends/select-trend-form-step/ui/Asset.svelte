<script lang="ts">
  import type { TTrendState } from '../schema.js'
  import type { TAssetSlug } from '$lib/ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'

  type TProps = {
    stepState: { $$: TTrendState }
  }

  const { stepState }: TProps = $props()

  const selected = new SvelteSet('slug' in stepState.$$.target ? stepState.$$.target.slug : [])

  $effect(() => {
    stepState.$$.target = { slug: Array.from(selected) }
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
