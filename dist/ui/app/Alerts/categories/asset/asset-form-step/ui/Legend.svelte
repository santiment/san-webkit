<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'

  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { assets, getAssetBySlug } = useAssetsCtx.get()
</script>

<div class="flex gap-2">
  {#if assets.$.length}
    {#each step.state.$$.target.slug as slug (slug)}
      {@const asset = getAssetBySlug(slug)}
      <div class="border">
        {asset?.name || slug}
      </div>
    {/each}
  {/if}
</div>
