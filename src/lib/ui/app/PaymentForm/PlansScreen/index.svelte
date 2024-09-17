<script lang="ts">
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import { PricingSection, useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/index.js'
  import { usePaymentFormCtx } from '../state.js'

  let { onPlanSelect }: { onPlanSelect: () => void } = $props()

  const { selectSubscriptionPlan } = usePaymentFormCtx.get()
  const { device } = useDeviceCtx()

  useSubscriptionPlanButtonCtx.set({
    onBillingPeriodChangeClick(_plan) {},
    onPlanButtonClick(plan) {
      selectSubscriptionPlan(plan)
      onPlanSelect()
    },
  })
</script>

<div
  class="gap-[120px] column sm:gap-[104px]"
  style="--plans-sticky-top: -{device.$.isMobile ? 40 : 65}px"
>
  <PricingSection></PricingSection>
</div>
