<script lang="ts">
  import { PricingSection, useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/index.js'
  import { usePaymentFormCtx } from '../state.js'

  let { onPlanSelect }: { onPlanSelect: () => void } = $props()

  const { selectSubscriptionPlan } = usePaymentFormCtx.get()

  useSubscriptionPlanButtonCtx.set({
    onBillingPeriodChangeClick(_plan) {},
    onPlanButtonClick(plan) {
      selectSubscriptionPlan(plan)
      onPlanSelect()
    },
  })
</script>

<div class="gap-[120px] column sm:gap-[104px]">
  <PricingSection></PricingSection>
</div>
