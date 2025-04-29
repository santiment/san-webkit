<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'

  import { SvelteSet } from 'svelte/reactivity'

  import Checkbox from '../../../../../../core/Checkbox/index.js'
  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { assets } = useAssetsCtx.get()

  const selectedAssets = new SvelteSet(step.state.$$.target.slug)
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

          step.state.$$.target.slug = Array.from(selectedAssets)
        }}
      ></Checkbox>
    </div>
  {/each}
{/if}
