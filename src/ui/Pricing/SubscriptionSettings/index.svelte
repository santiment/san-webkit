<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { subscription$ } from '@/stores/subscription'
  import { queryBillingHistory } from '@/api/subscription'
  import { paymentCard$ } from '@/stores/paymentCard'
  import { formatPrice, PlanName } from '@/utils/plans'
  import { getDateFormats } from '@/utils/dates'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import Setting from './Setting.svelte'
  import { showPlanSummaryDialog } from './PlansSummaryDialog.svelte'
  import { showRemovePaymentCardDialog } from '@/ui/RemovePaymentCardDialog.svelte'
  import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte'

  let isBillingLoading = true
  let billingHistory = []

  $: subscription = $subscription$
  $: periodEnd = subscription?.currentPeriodEnd
  $: isCanceled = !!subscription?.cancelAtPeriodEnd
  $: plan = subscription?.plan
  $: paymentCard = $paymentCard$

  queryBillingHistory().then((data) => {
    isBillingLoading = false
    billingHistory = data
  })

  function formatDate(date) {
    const { MMMM, DD, YYYY } = getDateFormats(new Date(date))
    return `${MMMM} ${DD}, ${YYYY}`
  }
</script>

<section id="subscription" class="border">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting>
    <div class="plan border row justify fluid v-center">
      <div>
        <div class="h4">{plan ? PlanName[plan.name] || plan.name : 'Free'} Plan</div>

        <div class="c-waterloo mrg-s mrg--t">
          {#if plan}
            {formatPrice(plan)} per {plan.interval}.
            <span class="btn c-accent" on:click={() => showPlanSummaryDialog()}
              >Change billing period</span
            >
            <br />
            Will automatically {isCanceled ? 'cancel' : 'renew'} on {formatDate(periodEnd)}
          {:else}
            You can see data <span class="btn c-accent">generated 24h ago.</span>
            <br />
            Upgrade your plan to get more abilities
          {/if}
        </div>
      </div>

      <button class="btn-1" on:click={() => showPlanSummaryDialog()}
        >{plan ? 'Change plan' : 'Upgrade plan'}</button
      >
    </div>
  </Setting>

  {#if subscription && !isCanceled}
    <Setting>
      <div>
        Cancel subscription
        <div class="c-waterloo">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <div class="btn c-accent" on:click={window.showCancelSubscriptionDialog}>
        Cancel subscription
      </div>
    </Setting>
  {/if}

  {#if paymentCard}
    <Setting>
      <div>
        Payment method
        <div class="card row v-center mrg-s mrg--t">
          <Svg illus {...CardBrandIllustration[paymentCard.brand]} class="mrg-m mrg--r" />

          <div class="dots c-waterloo mrg-s mrg--r">····</div>
          {paymentCard.last4}

          <Svg id="locked" w="14" h="15" class="mrg-m mrg--l" />
        </div>
      </div>

      <div class="txt-right">
        <button class="btn btn--red" on:click={showRemovePaymentCardDialog}>Remove</button>
        <button class="btn-2 mrg-l mrg--l" on:click={() => showUpdatePaymentCardDialog()}
          >Update card</button
        >
      </div>
    </Setting>
  {/if}

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

  :global(.phone),
  :global(.phone-xs) {
    .btn-1 {
      width: 100%;
      margin-top: 8px;
    }
  }
</style>
