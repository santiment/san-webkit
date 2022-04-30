<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import PlansSummaryDialog from './PlansSummaryDialog.svelte'

  export const showPlanSummaryDialog = (props?: any) => dialogs.show(PlansSummaryDialog, props)
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import { customerData$ } from '@/stores/user'
  import { querySanbasePlans } from '@/api/plans'
  import { Billing, onlyProLikePlans } from '@/utils/plans'
  import SpecialOfferBanner from '@/ui/Pricing/Page/SpecialOfferBanner.svelte'
  import BillingToggle from '@/ui/Pricing/Page/BillingToggle.svelte'
  import Plans from '@/ui/Pricing/Page/Plans.svelte'
  import { subscription$ } from '@/stores/subscription'

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
</script>

<Dialog {...$$props} title="Change your plan" bind:closeDialog>
  <div class="dialog-body">
    {#if annualDiscount.isEligible}
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
