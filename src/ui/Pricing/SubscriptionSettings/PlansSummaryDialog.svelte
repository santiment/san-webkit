<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import PlansSummaryDialog from './PlansSummaryDialog.svelte'

  export const showPlanSummaryDialog = () => dialogs.show(PlansSummaryDialog)
</script>

<script>
  import { onDestroy } from 'svelte'
  import Dialog from '@/ui/Dialog'
  import { querySanbasePlans } from '@/api/plans'
  import { customerData$ } from '@/stores/user'
  import { subscription$ } from '@/stores/subscription'
  import { Billing, onlyProLikePlans } from '@/utils/plans'
  import SpecialOfferBanner from '@/ui/Pricing/Page/SpecialOfferBanner.svelte'
  import BillingToggle from '@/ui/Pricing/Page/BillingToggle.svelte'
  import Plans from '@/ui/Pricing/Page/Plans.svelte'
  import { PLAN_BUTTON_CLICKED } from '../utils'

  let closeDialog
  let billing = Billing.MONTH

  let plans = []
  $: billingPlans = (billing, plans.filter(billingFilter))

  $: subscription = $subscription$
  $: ({ isLoggedIn, isEligibleForTrial, annualDiscount } = $customerData$)

  querySanbasePlans().then((data) => {
    plans = data.filter(onlyProLikePlans)
  })

  function billingFilter({ interval }) {
    return interval === billing
  }

  const close = () => closeDialog()
  window.addEventListener(PLAN_BUTTON_CLICKED, close)
  onDestroy(() => {
    window.removeEventListener(PLAN_BUTTON_CLICKED, close)
  })
</script>

<Dialog {...$$props} title="Change your plan" bind:closeDialog>
  <div class="dialog-body">
    {#if annualDiscount && annualDiscount.isEligible}
      <SpecialOfferBanner {...annualDiscount.discount} />
    {/if}

    <div class="row">
      <BillingToggle bind:billing />
    </div>

    <Plans
      {plans}
      {billingPlans}
      {subscription}
      {annualDiscount}
      {isLoggedIn}
      {isEligibleForTrial}
    />
  </div>
</Dialog>

<style lang="scss"></style>
