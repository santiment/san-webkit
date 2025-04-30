<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'
  import type { TAssetSlug } from '$lib/ctx/assets/api.js'

  import { SvelteSet } from 'svelte/reactivity'

  import { ListOfAssetsMulti } from '$ui/app/ListOfAssets/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const selectedAssets = new SvelteSet(step.state.$$.target.slug)

  $effect(() => {
    step.state.$$.target.slug = Array.from(selectedAssets)
  })

  function onSelect(slug: TAssetSlug) {
    if (selectedAssets.has(slug)) {
      selectedAssets.delete(slug)
    } else {
      selectedAssets.add(slug)
    }
  }
</script>

<ListOfAssetsMulti
  selected={selectedAssets}
  {onSelect}
  resetSelections={() => selectedAssets.clear()}
/>
