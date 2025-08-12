<script lang="ts">
  import type { TAlertStep } from '../../../index.svelte.js'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'
  import PreviewChart from './PreviewChart.svelte'

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

<section class="flex flex-col">
  <div class="flex justify-between font-medium text-fiord">
    <span>{description}</span>

    {#if isSingleAsset}
      <span>PRICE</span>
    {/if}
  </div>

  {#if assetAlertData}
    <section class="border">
      {#if isSingleAsset}
        <PreviewChart {...assetAlertData} />
      {:else}
        NOT SINGLE BANNER
      {/if}
    </section>
  {/if}
</section>
