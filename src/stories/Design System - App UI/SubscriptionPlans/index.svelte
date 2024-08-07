<script>
  import PaymentDialog, { showPaymentDialog$ } from '$ui/app/PaymentForm/Dialog.svelte'
  import Plans from '$ui/app/SubscriptionPlan/ProductPlans.svelte'
  import { getApiBusinessPlans } from '$ui/app/SubscriptionPlan/api'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showPaymentDialog = showPaymentDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick: (plan) => showPaymentDialog({ defaultPlan: plan }),
  })
</script>

<Plans></Plans>

<Plans productFilter={getApiBusinessPlans}></Plans>
