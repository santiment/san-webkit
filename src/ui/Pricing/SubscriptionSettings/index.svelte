<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { queryBillingHistory } from '@/api/subscription'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import { showRemovePaymentCardDialog } from '@/ui/RemovePaymentCardDialog.svelte'
  import { getBusinessPlans, getIndividualPlans, queryPlans, queryPppSettings } from '@/api/plans'
  import { getCustomer$Ctx } from '@/stores/customer'
  import { paymentCard$ } from '@/stores/paymentCard'
  import { Billing, getIsCustomPlan, getPlanName, Plan, ProductId } from '@/utils/plans'
  import { checkIsActiveSubscription } from '@/utils/subscription'
  import Setting from './Setting.svelte'
  import UserPlanCard from './SubscriptionCard/UserPlanCard.svelte'
  import FullAccessCard from './SubscriptionCard/FullAccessCard.svelte'
  import { getIndividualSuggestions, getBusinessSuggestions } from './SubscriptionCard/suggestions'
  import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte'
  import PlanSuggestions from './SubscriptionCard/PlanSuggestions.svelte'
  import { startCheckNftAccessFlow } from './nft'
  import { track } from '@/analytics'

  let className = ''
  export { className as class }

  const { customer$ } = getCustomer$Ctx()
  const DEFAULT_PLAN = {
    id: '0',
    name: Plan.FREE,
    amount: 0,
    interval: Billing.MONTH,
    product: { id: ProductId.SANBASE },
  }

  let isBillingLoading = true
  let billingHistory = []
  let plans = [] as SAN.Plan[]

  $: customer = $customer$
  $: ({ subscriptions, isEligibleForTrial, annualDiscount, isCanceled } = customer)
  $: paymentCard = $paymentCard$

  $: subscription = subscriptions.find((sub) => checkIsActiveSubscription(sub))

  $: plan = subscription?.plan ?? DEFAULT_PLAN
  $: isFree = plan?.name?.toUpperCase() === Plan.FREE
  $: individualSuggestions = getIndividualSuggestions(plan, annualDiscount)
  $: businessSuggestions = getBusinessSuggestions(plan)

  $: if (process.browser) {
    fetchPlans()
  }

  queryBillingHistory().then((data) => {
    isBillingLoading = false
    billingHistory = data
  })

  async function fetchPlans() {
    let [pppSettings, allPlans] = await Promise.all([queryPppSettings(), queryPlans()])

    let individualPlans = getIndividualPlans(allPlans)
    const businessPlans = getBusinessPlans(allPlans)

    if (pppSettings?.isEligibleForPpp) {
      individualPlans = pppSettings.plans
    }

    plans = individualPlans
      .concat(businessPlans)
      .sort((a, b) =>
        getIsCustomPlan(a.name) ? 1 : getIsCustomPlan(b.name) ? -1 : a.amount - b.amount,
      )
  }

  let isNftLoading = false
  function onCheckNftClick() {
    isNftLoading = true

    track.event('press', {
      category: 'General',

      type: 'sanr_nft_check',
      source: 'subscription_settings',

      source_url: window.location.origin + window.location.pathname,
      source_search_params: window.location.search,
    })

    startCheckNftAccessFlow(customer$).finally(() => {
      isNftLoading = false
    })
  }
</script>

<section id="subscription" class="border {className}">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting class="column $style.subscriptions">
    <plans-section>
      <UserPlanCard
        {plan}
        {subscription}
        {isEligibleForTrial}
        discount={individualSuggestions.length && individualSuggestions[0].discount}
        suggestionsCount={individualSuggestions.length}
      />

      <PlanSuggestions suggestions={individualSuggestions} {plans} {isEligibleForTrial}>
        <FullAccessCard currentPlanName={getPlanName(plan.name)} />
      </PlanSuggestions>
    </plans-section>

    <plans-section>
      <PlanSuggestions suggestions={businessSuggestions} {plans} />
    </plans-section>
  </Setting>

  {#if subscription && !isCanceled && !isFree}
    <Setting class="$style.setting justify">
      <div>
        Cancel subscription
        <div class="description c-waterloo">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <button
        class="cancel-btn btn c-accent"
        on:click={() => window.showCancelSubscriptionDialog?.()}
      >
        Cancel subscription
      </button>
    </Setting>
  {/if}

  <Setting class="$style.setting justify">
    <div>
      SanR NFT
      <div class="description c-waterloo sanr-description">
        Participate in battles in SanR app , win 10000 points and get 12 months subscription to
        SanBase PRO plan.
        <a
          href="https://academy.santiment.net/products-and-plans/sanbase-subscription-via-sanr-nft/"
          target="_blank"
          class="c-accent"
          data-source="sanr_nft_setting"
          data-type="learn_more">Learn more</a
        >
      </div>
    </div>
    <button class="btn-2" class:loading={isNftLoading} on:click={onCheckNftClick}>
      Check NFT access
    </button>
  </Setting>

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
    gap: 28px;
  }

  plans-section {
    width: 100%;
    display: flex;
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

    plans-section {
      flex-direction: column;
    }
  }

  .sanr-description {
    max-width: 525px;
  }
</style>
