<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'
  import type { TAssetSlug } from '$lib/ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'

  import { mapSlugNames } from '../../utils.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  const selectedSlugs = new SvelteSet(step.state.$$.target.slugs)

  $effect(() => {
    const slugs = Array.from(selectedSlugs)
    step.state.$$.target = { slugs, namesMap: mapSlugNames(slugs, getAssetBySlug) }
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
/>
