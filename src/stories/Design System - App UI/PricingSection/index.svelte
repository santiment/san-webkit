<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { showPaymentDialog$ } from '$ui/app/PaymentForm/Dialog.svelte'
  import PricingSection from '$ui/app/SubscriptionPlan/PricingSection.svelte'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'

  const props: ComponentProps<PricingSection> = $props()

  const showPaymentDialog = showPaymentDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick: (plan) => showPaymentDialog({ defaultPlan: plan }),
  })
</script>

<main class="py-16">
  <PricingSection {...props}></PricingSection>
</main>
