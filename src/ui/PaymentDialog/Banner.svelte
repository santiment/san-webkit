<script lang="ts">
  import { showIntercom } from '../../analytics/intercom'
  import { getDateFormats } from '../../utils/dates'
  import { checkIsYearlyPlan } from '../../utils/plans'

  export let plan: SAN.Plan
  export let name: string
  export let price: string
  export let trialDaysLeft: number
  export let isEligibleForTrial: boolean = true

  function getNextPaymentDates(plan: SAN.Plan) {
    const target = checkIsYearlyPlan(plan) ? 'FullYear' : 'Month'

    const date = new Date()
    date['set' + target](date['get' + target]() + 1)

    const { DD, MM, YY } = getDateFormats(date)
    return `${DD}/${MM}/${YY}`
  }
</script>

<div class="banner mrg-l mrg--b" class:trial={isEligibleForTrial}>
  <div class="txt-m mrg-xs mrg--b">
    {#if isEligibleForTrial}
      Enjoy your 14-day free trial of Sanbase {name}!
    {:else if trialDaysLeft < 1}
      Your Pro trial has expired! If you have accidentally bypassed the free trial, please get in
      touch with <button class="btn c-accent" on:click={showIntercom}>our support team</button>
    {:else}
      Your trial will end in {trialDaysLeft} day{trialDaysLeft === 1 ? '' : 's'}, you are free to
      upgrade it right now.
    {/if}
  </div>

  <div>
    {#if isEligibleForTrial}
      Your card will be charged <b>{price}</b> after the trial period ends. You won't be charged if
      you cancel anytime before <b>03/03/22</b>
    {:else}
      Your card will be charged <b>{price}</b> every {plan.interval} until your decide to unsubscribe.
      Your next payment: <b>{getNextPaymentDates(plan)}</b>.
    {/if}
  </div>
</div>

<style>
  .banner {
    background: var(--orange-light-1);
    padding: 16px 24px;
  }
  .trial {
    background: var(--green-light-1);
  }

  button {
    --color-hover: var(--accent-hover, var(--green-hover));
  }

  b {
    font-weight: 600;
  }
</style>
