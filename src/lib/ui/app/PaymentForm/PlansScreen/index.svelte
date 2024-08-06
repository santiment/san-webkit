<script lang="ts">
  import { Plans, useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/index.js'
  import { usePaymentFormCtx } from '../state.js'

  let { onPlanSelect }: { onPlanSelect: () => void } = $props()

  const { selectSubscriptionPlan } = usePaymentFormCtx.get()

  useSubscriptionPlanButtonCtx({
    onBillingPeriodChangeClick(plan) {},
    onPlanButtonClick(plan) {
      selectSubscriptionPlan(plan)
      onPlanSelect()
    },
  })
</script>

<Plans></Plans>
