<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { queryBillingHistory } from '@/api/subscription'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import { showRemovePaymentCardDialog } from '@/ui/RemovePaymentCardDialog.svelte'
  import { queryPppSettings, querySanbasePlans } from '@/api/plans'
  import { getCustomer$Ctx } from '@/stores/customer'
  import { paymentCard$ } from '@/stores/paymentCard'
  import { Billing, onlyProLikePlans, Plan, getAlternativePlan } from '@/utils/plans'
  import Setting from './Setting.svelte'
  import PlanCard from './SubscriptionCard/PlanCard.svelte'
  import UserPlanCard from './SubscriptionCard/UserPlanCard.svelte'
  import FullAccessCard from './SubscriptionCard/FullAccessCard.svelte'
  import { getSuggestions } from './SubscriptionCard/suggestions'
  import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte'
  import { showCancelSubscriptionDialog } from '../CancelSubscriptionDialog'

  let className = ''
  export { className as class }

  const { customer$ } = getCustomer$Ctx()

  let isBillingLoading = true
  let billingHistory = []
  let plans = [] as SAN.Plan[]

  $: ({ subscription, isEligibleForTrial, annualDiscount, isCanceled } = $customer$)
  $: paymentCard = $paymentCard$

  $: plan = subscription?.plan || { name: Plan.FREE, amount: 0, interval: Billing.MONTH }
  $: isFree = plan?.name?.toUpperCase() === Plan.FREE
  $: suggestions = getSuggestions(plan, annualDiscount)
  $: suggestedPlans = (suggestions, plans, annualDiscount, getPlanSuggestions())

  queryPlans()

  queryBillingHistory().then((data) => {
    isBillingLoading = false
    billingHistory = data
  })

  async function queryPlans() {
    if (!process.browser) return

    let [pppSettings, sanbasePlans] = await Promise.all([queryPppSettings(), querySanbasePlans()])

    if (pppSettings?.isEligibleForPpp) {
      sanbasePlans = pppSettings.plans
    }

    plans = sanbasePlans.filter(onlyProLikePlans)
  }

  function getPlanSuggestions() {
    return plans.filter((plan) => {
      const isSameBilling = plan.interval === suggestions[0].billing
      if (suggestions[0].discount) {
        return isSameBilling
      }

      return (
        (suggestions[0][plan.name] || (suggestions[1] && suggestions[1][plan.name])) &&
        isSameBilling
      )
    })
  }
</script>

<section id="subscription" class="border {className}">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting class="$style.subscriptions">
    <UserPlanCard
      {plan}
      {subscription}
      {isEligibleForTrial}
      discount={suggestions[0].discount}
      suggestionsCount={suggestedPlans.length}
    />

    {#each suggestedPlans as suggestion, index}
      {@const altPlan = getAlternativePlan(suggestion, plans)}
      {@const currentSuggestion = suggestions[index] || {}}
      {@const planInfo = currentSuggestion[suggestion.name] || {}}
      <PlanCard
        {...planInfo}
        {isEligibleForTrial}
        {altPlan}
        {plans}
        discount={currentSuggestion.discount}
        isUpgrade={currentSuggestion.isUpgrade}
        suggestionsCount={suggestedPlans.length}
        plan={suggestion}
      />
    {:else}
      <FullAccessCard />
    {/each}
  </Setting>

  {#if subscription && !isCanceled && !isFree}
    <Setting class="$style.setting justify">
      <div>
        Cancel subscription
        <div class="description c-waterloo">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <button class="cancel-btn btn c-accent" on:click={() => showCancelSubscriptionDialog()}>
        Cancel subscription
      </button>
    </Setting>
  {/if}

  <Setting class="$style.setting justify">
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

    <div class="payment-actions txt-right">
      {#if paymentCard}
        <button class="btn btn--red mrg-l mrg--r" on:click={showRemovePaymentCardDialog}
          >Remove</button
        >
      {/if}

      <button class="btn-2" on:click={() => showUpdatePaymentCardDialog()}>
        {paymentCard ? 'Update' : 'Add'} card
      </button>
    </div>
  </Setting>

  <Setting class="$style.setting justify">
    <div>
      Billing history

      <p class="description c-waterloo">Shows an overview of all charges issued for your account</p>
    </div>

    {#if isBillingLoading}
      <div class="loading-spin" />
    {:else if billingHistory.length}
      <button
        class="history-btn btn-0 nowrap"
        on:click={() => showBillingHistoryDialog({ history: billingHistory })}
      >
        Show history
      </button>
    {:else}
      <div class="history nowrap c-waterloo">No history yet</div>
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

  .description {
    margin-top: 6px;
  }

  :global(.phone),
  :global(.phone-xs) {
    section {
      font: var(--body-2);
    }

    h4 {
      font: var(--body-3);
    }

    .btn-2 {
      --v-padding: 7px;
    }

    .setting {
      flex-direction: column;
      align-items: flex-start;
    }

    .cancel-btn,
    .history,
    .history-btn {
      margin-top: 12px;
    }

    .payment-actions {
      margin-top: 16px;
    }

    .history {
      color: var(--fiord);
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
