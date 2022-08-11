<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { queryBillingHistory } from '@/api/subscription'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import { showRemovePaymentCardDialog } from '@/ui/RemovePaymentCardDialog.svelte'
  import { customerData$ } from '@/stores/user'
  import { querySanbasePlans } from '@/api/plans'
  import { onlyProAndFreeLikePlans, onlyProLikePlans, Plan, PlanName } from '@/utils/plans'
  import { showCancelSubscriptionDialog } from '../CancelSubscriptionDialog'
  import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte'
  import Setting from './Setting.svelte'
  import SubscriptionCard from './SubscriptionCard/SubscriptionCard.svelte'
  import SubscriptionProPlan from './SubscriptionCard/SubscriptionProPlan.svelte'
  import { SubscriptionCardType } from './SubscriptionCard/utils'
  import Card from './SubscriptionCard/Card.svelte'
  import PlanCard from './SubscriptionCard/PlanCard.svelte'
  import UserPlanCard from './SubscriptionCard/UserPlanCard.svelte'
  import { getSuggestions } from './SubscriptionCard/suggestions'
  import FullAccessCard from './SubscriptionCard/FullAccessCard.svelte'

  let className = ''
  export { className as class }
  export let subscription: SAN.Subscription | undefined
  export let paymentCard: SAN.PaymentCard | undefined

  let isBillingLoading = true
  let billingHistory = []
  let plans = [] as SAN.Plan[]

  $: ({ plan, currentPeriodEnd, cancelAtPeriodEnd } = subscription || ({} as SAN.Subscription))
  $: periodEnd = currentPeriodEnd
  $: isCanceled = !!cancelAtPeriodEnd
  $: freePlan = plans.find(({ name }) => name === Plan.FREE)
  // $: plan = subscription?.plan || freePlan
  $: ({ isEligibleForTrial, annualDiscount } = $customerData$)
  $: ({ shouldHideSecondCard, shouldHideThirdCard } = checkCardsVisibility({
    annualDiscount,
    plan,
  }))
  $: isEligibleForAnnualDiscount = annualDiscount?.isEligible
  $: isNonFreePlan = plan?.name !== Plan.FREE

  $: suggestions = getSuggestions(plan, annualDiscount)
  $: suggestedPlans = getPlanSuggestions(plans, annualDiscount)

  querySanbasePlans().then((data) => {
    // plans = data.filter(onlyProAndFreeLikePlans)
    plans = data.filter(onlyProLikePlans)
  })

  queryBillingHistory().then((data) => {
    isBillingLoading = false
    billingHistory = data
  })

  function getPlanSuggestions() {
    console.log(suggestions)
    return plans.filter((plan) => {
      const isSameBilling = plan.interval === suggestions.billing
      if (suggestions.discount) {
        return isSameBilling
      }

      return suggestions[plan.name] && isSameBilling
    })
  }

  function checkCardsVisibility({ annualDiscount, plan }) {
    let shouldHideSecondCard = false
    let shouldHideThirdCard = false

    if (!annualDiscount?.isEligible && plan?.name === Plan.PRO) {
      shouldHideSecondCard = true
    }

    if (!annualDiscount?.isEligible && plan?.name === Plan.PRO_PLUS) {
      shouldHideThirdCard = true
    }

    return { shouldHideSecondCard, shouldHideThirdCard }
  }
</script>

<section id="subscription" class="border {className}">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting class="$style.subscriptions">
    <UserPlanCard {plan} />

    {#each suggestedPlans as suggestion}
      <PlanCard
        {...suggestions[suggestion.name]}
        {isEligibleForTrial}
        discount={suggestions.discount}
        isUpgrade={suggestions.isUpgrade}
        plan={suggestion}
        altPlan={plan}
      />
    {:else}
      <FullAccessCard />
    {/each}
  </Setting>

  <Setting class="$style.subscriptions">
    <SubscriptionCard
      type={SubscriptionCardType.Current}
      {plan}
      {subscription}
      {isEligibleForTrial}
      {annualDiscount}
      {plans}
    />
    {#if !shouldHideSecondCard && !shouldHideThirdCard}
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        {plan}
        {subscription}
        {isEligibleForTrial}
        {annualDiscount}
        {plans}
      />
    {/if}
    {#if !shouldHideThirdCard}
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        {plan}
        {subscription}
        {isEligibleForTrial}
        {annualDiscount}
        {plans}
      />
    {/if}
    {#if shouldHideThirdCard}
      <SubscriptionProPlan />
    {/if}
  </Setting>

  {#if subscription && !isCanceled}
    <Setting>
      <div>
        Cancel subscription
        <div class="c-waterloo">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <div class="btn c-accent" on:click={() => showCancelSubscriptionDialog()}>
        Cancel subscription
      </div>
    </Setting>
  {/if}

  <Setting>
    <div>
      Payment method

      {#if paymentCard}
        <div class="card row v-center mrg-s mrg--t">
          <Svg illus {...CardBrandIllustration[paymentCard.brand]} class="mrg-m mrg--r" />

          <div class="dots c-waterloo mrg-s mrg--r">····</div>
          {paymentCard.last4}

          <Svg id="locked" w="14" h="15" class="mrg-m mrg--l" />
        </div>
      {/if}
    </div>

    <div class="txt-right">
      {#if paymentCard}
        <button class="btn btn--red" on:click={showRemovePaymentCardDialog}>Remove</button>
      {/if}

      <button class="btn-2 mrg-l mrg--l" on:click={() => showUpdatePaymentCardDialog()}>
        {paymentCard ? 'Update' : 'Add'} card
      </button>
    </div>
  </Setting>

  <Setting>
    <div>
      Billing history
      <p class="c-waterloo">Shows an overview of all charges issued for your account</p>
    </div>

    {#if isBillingLoading}
      <div class="loading-spin" />
    {:else if billingHistory.length}
      <div
        class="btn c-accent nowrap"
        on:click={() => showBillingHistoryDialog({ history: billingHistory })}
      >
        Show history
      </div>
    {:else}
      <div class="c-waterloo nowrap">No history yet</div>
    {/if}
  </Setting>
</section>

<style lang="scss">
  h4 {
    background: var(--athens);
    padding: 12px 24px;
  }

  .btn--red {
    --color: var(--red);
    --color-hover: var(--red-hover);
  }

  .plan {
    padding: 24px;
    background: var(--athens);
    flex-wrap: wrap;
  }

  .dots {
    font-size: 30px;
    line-height: 4px;
    letter-spacing: 2px;
    margin-top: -4px;
  }

  .card {
    fill: var(--waterloo);
  }

  .subscriptions {
    gap: 16px;
  }

  :global(.phone),
  :global(.phone-xs) {
    .btn-1 {
      width: 100%;
      margin-top: 8px;
    }
  }

  :global(.phone),
  :global(.tablet),
  :global(.phone-xs) {
    .subscriptions {
      flex-direction: column;
    }
  }
</style>
