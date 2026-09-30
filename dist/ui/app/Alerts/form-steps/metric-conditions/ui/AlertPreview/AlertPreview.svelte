<script lang="ts">
  import type { TAlertStep } from '../../../index.svelte.js'

  import { useAlertFormCtx } from '../../../../ctx/index.svelte.js'
  import Svg from '../../../../../../core/Svg/Svg.svelte'

  import PreviewChart from './PreviewChart.svelte'
  import AssetPrice from './AssetPrice.svelte'

  type TProps = {
    description: string
  }

  const { description }: TProps = $props()

  const { steps } = useAlertFormCtx.get()

  const assetAlertData = $derived.by(() => {
    const asset = getStepAlert(steps[0], 'assets')
    const conditions = getStepAlert(steps[1], 'metric-conditions')
    const notifications = getStepAlert(steps[2], 'notifications-privacy')

    if (!asset || !conditions || !notifications) return null

    return { asset, conditions, notifications }
  })

  const isSingleAsset = $derived(assetAlertData?.asset.settings.target.slug.length === 1)

  const getStepAlert = <T extends TAlertStep, GName extends T['name']>(
    step: T,
    name: GName,
  ): ReturnType<Extract<T, { name: GName }>['reduceToApi']> | null =>
    step.name === name ? step.reduceToApi(step.state.$$) : null
</script>

<section class="flex flex-col gap-2 text-xs font-medium">
  <section class="flex justify-between text-fiord">
    <span>{description}</span>

    {#if assetAlertData && isSingleAsset}
      <AssetPrice slug={assetAlertData.asset.settings.target.slug[0]} />
    {/if}
  </section>

  {#if assetAlertData}
    {#if isSingleAsset}
      <PreviewChart {...assetAlertData} />
    {:else}
      <section class="flex justify-center gap-4 rounded-lg border pb-12 pt-10 text-sm text-fiord">
        <Svg id="data" w="75" h="87" illus />

        <section class="flex max-w-36 flex-col gap-2">
          <h4 class="font-semibold">Chart unavailable!</h4>
          <p class="font-normal">Please select a single asset to view data</p>
        </section>
      </section>
    {/if}
  {/if}
</section>
