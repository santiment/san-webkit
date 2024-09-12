<script lang="ts">
  import { showPaymentDialog$ } from '$ui/app/PaymentForm/Dialog.svelte'
  import PricingSection from '$ui/app/SubscriptionPlan/PricingSection.svelte'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'

  const showPaymentDialog = showPaymentDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick: (plan) => showPaymentDialog({ defaultPlan: plan }),
  })
</script>

<PricingSection>
  <div class="border border-red px-5 py-20 text-xl">The child</div>
</PricingSection>
