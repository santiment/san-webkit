<script>
  import { showPaymentDialog$ } from '$ui/app/PaymentForm/PaymentDialog.svelte'
  import Plans from '$ui/app/SubscriptionPlan/ProductPlans.svelte'

  import { getApiBusinessPlans, getSanbaseConsumerPlans } from '$ui/app/SubscriptionPlan/api'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'
  import { useProductPlansFlow } from '$ui/app/SubscriptionPlan/flow.svelte'

  const showPaymentDialog = showPaymentDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick: (plan) => showPaymentDialog({ defaultPlan: plan }),
  })

  const { productPlans: sanbasePlans } = useProductPlansFlow([], { $: getSanbaseConsumerPlans })
  const { productPlans: businessPlans } = useProductPlansFlow([], { $: getApiBusinessPlans })
</script>

<Plans productPlans={sanbasePlans.$}></Plans>

<Plans productPlans={businessPlans.$}></Plans>
