<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import { SvelteSet } from 'svelte/reactivity'

  import Checkbox from '$ui/core/Checkbox/index.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { assets } = useAssetsCtx.get()

  const selectedAssets = new SvelteSet(step.state.$$.slug)
</script>

Loaded: {assets.$.length > 0}
<br />

{#if assets.$.length}
  {#each assets.$.slice(0, 2) as asset (asset.slug)}
    <div>
      {asset.name}: <Checkbox
        isActive={selectedAssets.has(asset.slug)}
        onCheckedChange={(value) => {
          if (value) selectedAssets.add(asset.slug)
          else selectedAssets.delete(asset.slug)

          step.state.$$.slug = Array.from(selectedAssets)
        }}
      ></Checkbox>
    </div>
  {/each}
{/if}
