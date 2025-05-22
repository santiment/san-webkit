<script lang="ts">
  import type { TTrendState } from '../schema.js'
  import type { TAssetSlug } from '../../../../../../../ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '../../../../../ListOfAssets/index.js'
  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'

  import { mapSlugNames } from '../../../asset/utils.js'

  type TProps = {
    stepState: { $$: TTrendState }
  }

  const { stepState }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  const selected = new SvelteSet(
    stepState.$$.target.type === 'asset' ? stepState.$$.target.slugs : [],
  )

  $effect(() => {
    const slugs = Array.from(selected)

    stepState.$$.target = { type: 'asset', slugs, namesMap: mapSlugNames(slugs, getAssetBySlug) }
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
