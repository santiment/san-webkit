<script lang="ts">
  import { SubscriptionCardType, SubscriptionType } from './utils'
  import { formatPrice } from '../../../../utils/plans'
  import { getDateFormats } from '../../../../utils/dates'

  export let type: SubscriptionCardType
  export let subscriptionType: SubscriptionType
  export let subscription: SAN.Subscription
  export let plan: SAN.Plan

  $: periodEnd =
    subscription?.currentPeriodEnd && getDateFormats(new Date(subscription.currentPeriodEnd))
</script>

{#if type === SubscriptionCardType.Current}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished}
    <div class="description mrg--b mrg-m">
      Starter plan with limited access to Sanbase features. Check all plans
      <a href="https://app.santiment.net/pricing" target="_blank" class="c-accent">here!</a>
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial}
    <div class="description mrg--b mrg-m">
      Your card will be charged <span class="txt-m c-black">{formatPrice(plan)} after</span> your
      trial will finish on
      <span class="txt-m c-black">{periodEnd.MMMM} {periodEnd.DD}, {periodEnd.YYYY}</span>
    </div>
  {:else}
    <div class="description mrg--b mrg-m">
      Your card will be charged <span class="txt-m c-black">{formatPrice(plan)} per month.</span> It
      will automatically renewed on
      <span class="txt-m c-black">{periodEnd.MMMM} {periodEnd.DD}, {periodEnd.YYYY}</span>
    </div>
  {/if}
{/if}

{#if type === SubscriptionCardType.Suggested}
  <div class="description mrg--b mrg-m">
    Get access to advanced crypto metrics, market insights and more! Check all plans
    <a href="https://app.santiment.net/pricing" target="_blank" class="c-accent">here!</a>
  </div>
{/if}

{#if type === SubscriptionCardType.Next}
  <div class="description mrg--b mrg-m">
    Advanced plan with complete access to analytics, backtesting framework. Check all plans
    <a href="https://app.santiment.net/pricing" target="_blank" class="c-accent">here!</a>
  </div>
{/if}

<style lang="scss">
  .description {
    max-width: 375px;
    color: var(--fiord);
  }
</style>
