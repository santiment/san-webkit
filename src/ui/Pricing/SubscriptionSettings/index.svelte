<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { queryBillingHistory } from '@/api/subscription'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import { showRemovePaymentCardDialog } from '@/ui/RemovePaymentCardDialog.svelte'
  import { customerData$ } from '@/stores/user'
  import { querySanbasePlans } from '@/api/plans'
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
  export let subscription: SAN.Subscription | undefined
  export let paymentCard: SAN.PaymentCard | undefined

  let isBillingLoading = true
  let billingHistory = []
  let plans = [] as SAN.Plan[]

  $: isCanceled = !!subscription?.cancelAtPeriodEnd
  $: plan = subscription?.plan || { name: Plan.FREE, amount: 0, interval: Billing.MONTH }
  $: isFree = plan?.name?.toUpperCase() === Plan.FREE
  $: ({ isEligibleForTrial, annualDiscount } = $customerData$)
  $: suggestions = getSuggestions(plan, annualDiscount)
  $: suggestedPlans = (suggestions, plans, annualDiscount, getPlanSuggestions())

  querySanbasePlans().then((data) => {
    plans = data.filter(onlyProLikePlans)
  })

  queryBillingHistory().then((data) => {
    isBillingLoading = false
    billingHistory = data
  })

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
        <div class="c-waterloo description">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <button class="btn c-accent cancel-btn" on:click={() => showCancelSubscriptionDialog()}>
        Cancel subscription
      </button>
    </Setting>
  {/if}

  <Setting class="$style.setting justify">
    <div>
      <span class="setting-title">Payment method</span>

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
        <button class="btn btn--red mrg-l mrg--r" on:click={showRemovePaymentCardDialog}
          >Remove</button
        >
      {/if}

      <button class="btn-2 payment-btn" on:click={() => showUpdatePaymentCardDialog()}>
        {paymentCard ? 'Update' : 'Add'} card
      </button>
    </div>
  </Setting>

  <Setting class="$style.setting justify">
    <div>
      <span class="setting-title">Billing history</span>
      <p class="description c-waterloo">Shows an overview of all charges issued for your account</p>
    </div>

    {#if isBillingLoading}
      <div class="loading-spin" />
    {:else if billingHistory.length}
      <button
        class="btn c-accent nowrap showhistory"
        on:click={() => showBillingHistoryDialog({ history: billingHistory })}
      >
        Show history
      </button>
    {:else}
      <div class="nowrap c-waterloo nohistory setting-title">No history yet</div>
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
    .description {
      line-height: 24px;
    }
    .setting-title {
      line-height: 24px;
      color: var(--rhino);
    }
    .btn-1 {
      width: 100%;
      margin-top: 8px;
    }

    .card {
      --margin: 6px;
    }

    .setting {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .cancel-btn {
      margin-top: 12px;
    }

    .txt-right {
      margin-top: 12px;
      display: flex;
      align-items: center;
    }

    .btn-2 {
      --v-padding: 7px;
    }

    .showhistory {
      margin-top: 12px;
    }

    .nohistory {
      color: var(--fiord);
    }

    .payment-btn {
      font: var(--body-2);
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
