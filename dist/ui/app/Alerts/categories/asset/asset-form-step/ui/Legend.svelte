<script lang="ts">
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'
  import StepValue from '../../../../Dialog/StepValue.svelte'
  import AssetLogo from '../../../../../AssetLogo/AssetLogo.svelte'


  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  const MAX = 3

  const slugs = $derived(step.state.$$.target.slugs)
  const visible = $derived(slugs.slice(0, MAX))
</script>

<section class="flex flex-wrap gap-2">
  {#each visible as slug}
    {@const asset = getAssetBySlug(slug)}

    <StepValue>
      <AssetLogo {slug} />

      {asset?.ticker ?? ''}
    </StepValue>
  {/each}

  {#if slugs.length > MAX}
    <StepValue>
      +{slugs.length - MAX}
    </StepValue>
  {/if}
</section>
