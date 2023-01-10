<script>import { showIntercom } from './../../analytics/intercom';
import { subscription$ } from './../../stores/subscription';
import { getDateFormats } from './../../utils/dates';
import { calculateTrialDaysLeft, getNextPaymentDate } from './../../utils/subscription';
export let plan;
export let name;
export let price;
export let isEligibleForTrial = true;
$: subscription = $subscription$;
$: trialDaysLeft = (subscription === null || subscription === void 0 ? void 0 : subscription.trialEnd) ? calculateTrialDaysLeft(subscription.trialEnd) : 0;
function formatDate(date) {
  const {
    DD,
    MM,
    YY
  } = getDateFormats(date);
  return `${DD}/${MM}/${YY}`;
}
function getNextPaymentDates(plan) {
  return formatDate(getNextPaymentDate(plan));
}
function getTrialEndDate() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return formatDate(date);
}</script>

<div class="banner mrg-l mrg--b" class:trial={isEligibleForTrial}>
  <div class="txt-m mrg-xs mrg--b">
    {#if isEligibleForTrial}
      Enjoy your 14-day free trial of Sanbase {name || ''}!
    {:else if trialDaysLeft < 1}
      Your Pro trial has expired! If you have accidentally bypassed the free trial, please get in
      touch with <button class="link-pointer" on:click={showIntercom}>our support team</button>
    {:else}
      Your trial will end in {trialDaysLeft} day{trialDaysLeft === 1 ? '' : 's'}, you are free to
      upgrade it right now.
    {/if}
  </div>

  <div>
    {#if isEligibleForTrial}
      Your card will be charged <b>{price}</b> after the trial period ends. You won't be charged if
      you cancel anytime before <b>{getTrialEndDate()}</b>
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

  b {
    font-weight: 600;
  }
</style>
