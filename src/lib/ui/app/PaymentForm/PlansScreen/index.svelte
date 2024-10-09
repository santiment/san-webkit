<script lang="ts">
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import { showPlanChangeDialog$ } from '$ui/app/PlanChangeDialog/PlanChangeDialog.svelte'
  import { PricingSection, useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/index.js'
  import { usePaymentFormCtx } from '../state.js'

  let { onPlanSelect }: { onPlanSelect: () => void } = $props()

  const showPlanChangeDialog = showPlanChangeDialog$()
  const { selectSubscriptionPlan } = usePaymentFormCtx.get()
  const { device } = useDeviceCtx()

  useSubscriptionPlanButtonCtx.set({
    onPlanButtonClick(plan) {
      selectSubscriptionPlan(plan)
      onPlanSelect()
    },
    onPlanChangeClick(plan) {
      showPlanChangeDialog({ newPlan: plan, source: 'payment_dialog' })
    },
    onBillingPeriodChangeClick(plan) {
      showPlanChangeDialog({ newPlan: plan, source: 'payment_dialog' })
    },
  })
</script>

<div
  class="gap-[120px] column sm:gap-[104px]"
  style="--plans-sticky-top: -{device.$.isMobile ? 40 : 65}px"
>
  <PricingSection source="payment_dialog"></PricingSection>
</div>
