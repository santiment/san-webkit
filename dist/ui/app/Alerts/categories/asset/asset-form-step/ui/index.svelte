<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'
  import type { TAssetSlug } from '../../../../../../../ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '../../../../../ListOfAssets/index.js'
  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'

  import { mapSlugNames } from '../../utils.js'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  const selectedSlugs = new SvelteSet(state.$$.target.slugs)

  $effect(() => {
    const slugs = Array.from(selectedSlugs)
    state.$$.target = { slugs, namesMap: mapSlugNames(slugs, getAssetBySlug) }
  })

  function onSelect(slug: TAssetSlug) {
    if (selectedSlugs.has(slug)) {
      selectedSlugs.delete(slug)
    } else {
      selectedSlugs.add(slug)
    }
  }
</script>

<ListOfAssetsMulti
  selected={selectedSlugs}
  {onSelect}
  resetSelections={() => selectedSlugs.clear()}
  hasSearch
  hasTabs
/>
