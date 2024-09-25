<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { showPaymentDialog$ } from '$ui/app/PaymentForm/PaymentDialog.svelte'
  import PricingSection from '$ui/app/SubscriptionPlan/PricingSection.svelte'
  import { useSubscriptionPlanButtonCtx } from '$ui/app/SubscriptionPlan/ctx'

  const props: ComponentProps<PricingSection> = $props()

  const showPaymentDialog = showPaymentDialog$()

  useSubscriptionPlanButtonCtx({
    onPlanButtonClick: (plan, e: { currentTarget: HTMLElement }) =>
      showPaymentDialog({
        defaultPlan: plan,
        triggeredBy: e.currentTarget,
      }),
  })
</script>

<main class="gap-[120px] px-5 py-16 column sm:gap-[104px] sm:px-0">
  <PricingSection {...props}></PricingSection>
</main>
