<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { SubscriptionCardType, SubscriptionType } from './utils'
  import { calculateTrialDaysLeft } from '../../../../utils/subscription'

  export let type: SubscriptionCardType
  export let subscriptionType: SubscriptionType
  export let subscription: SAN.Subscription
  export let annualDiscount: SAN.AnnualDiscount
</script>

{#if type === SubscriptionCardType.Current}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished}
    <div class="img row hv-center">
      <Svg id="checkmark-large" w="14" h="10" />
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial}
    <div class="card days row hv-center txt-m">
      {calculateTrialDaysLeft(subscription.currentPeriodEnd)} days left
    </div>
  {:else}
    <div class="img img-green row hv-center">
      <Svg id="checkmark-large" w="14" h="10" />
    </div>
  {/if}
{/if}

{#if type === SubscriptionCardType.Suggested}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished}
    <div class="card card-white suggested row hv-center txt-m">
      <Svg id="star-filled" w="16" h="16" class="mrg--r mrg-s" /> Popular
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial || subscriptionType === SubscriptionType.ProFirstMonth}
    <div class="card card-white suggested row hv-center txt-m">
      {annualDiscount.discount.percentOff}% Off
    </div>
  {/if}
{/if}

{#if type === SubscriptionCardType.Next}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished || subscriptionType === SubscriptionType.Pro}
    <div class="card card-white next row hv-center txt-m">
      <Svg id="rocket-filled" w="16" h="18" class="mrg-s mrg--r" /> Popular
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial || subscriptionType === SubscriptionType.ProFirstMonth}
    <div class="card card-white next row hv-center txt-m">
      {annualDiscount.discount.percentOff}% Off
    </div>
  {/if}
{/if}

<style lang="scss">
  .img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: var(--img-background, var(--porcelain));
  }

  .img-green {
    --img-background: var(--green);
    fill: var(--white);
  }

  .card {
    padding: 6px 12px;
    background: var(--card-background, var(--porcelain));
    border-radius: 6px;
  }

  .card-white {
    --card-background: var(--white);
  }

  .days {
    color: var(--fiord);
  }

  .suggested {
    color: var(--green);
    fill: var(--green);
  }

  .next {
    color: var(--orange);
    fill: var(--orange);
  }
</style>
