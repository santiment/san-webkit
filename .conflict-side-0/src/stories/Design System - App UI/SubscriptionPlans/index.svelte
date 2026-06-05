<script>
  import { showPaymentDialog$ } from '$ui/app/PaymentForm/PaymentDialog.svelte'
  import { showPlanChangeDialog$ } from '$ui/app/PlanChangeDialog/PlanChangeDialog.svelte'
  import Plans from '$ui/app/SubscriptionPlan/ProductPlans.svelte'

  import { getApiBusinessPlans, getSanbaseConsumerPlans } from '$ui/app/SubscriptionPlan/api'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'
  import { useProductPlansFlow } from '$ui/app/SubscriptionPlan/flow.svelte'

  const showPaymentDialog = showPaymentDialog$()
  const showPlanChangeDialog = showPlanChangeDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick(plan) {
      console.log('onPlanButtonClick')
      showPaymentDialog({ defaultPlan: plan })
    },
    onPlanChangeClick(plan) {
      console.log('onPlanChangeClick')
      showPlanChangeDialog({ newPlan: plan })
    },
    onBillingPeriodChangeClick(plan) {
      console.log('onBillingPeriodChangeClick')
      showPlanChangeDialog({ newPlan: plan })
    },
  })

  const { productPlans: sanbasePlans } = useProductPlansFlow([], { $: getSanbaseConsumerPlans })
  const { productPlans: businessPlans } = useProductPlansFlow([], { $: getApiBusinessPlans })
</script>

<div class="max-w-6xl">
  <Plans productPlans={sanbasePlans.$}></Plans>

  <Plans productPlans={businessPlans.$}></Plans>
</div>
