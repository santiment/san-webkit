<script context="module">
  import { dialogs } from './../../ui/Dialog'
  import PlanChangeDialog from './PlanChangeDialog.svelte'
  export const showPlanChangeDialog = (props) => dialogs.show(PlanChangeDialog, props)
</script>

<script lang="ts">
  import Dialog from './../../ui/Dialog'
  import { DialogLock } from './../../ui/Dialog/dialogs'
  import Svg from './../../ui/Svg/svelte'
  import { subscription$ } from './../../stores/subscription'
  import { Billing, formatPrice, PlanName } from './../../utils/plans'
  import { getDateFormats } from './../../utils/dates'
  import { mutateUpdateSubscription } from './../../api/subscription'
  import { onPlanChangeError, onPlanChangeSuccess } from './utils'
  export let DialogPromise
  export let plan
  export let isUpgrade = false
  let closeDialog
  let loading = false
  const subscription = $subscription$
  const newName = PlanName[plan.name] || plan.name
  const isNewBillingMonthly = plan.interval === Billing.MONTH
  const newBilling = isNewBillingMonthly ? 'Monthly' : 'Annual'
  const { currentPeriodEnd = Date.now(), plan: currentPlan } = subscription
  const currentPlanName = PlanName[currentPlan.name] || currentPlan.name

  function formatDate() {
    const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
    return `${MMMM} ${DD}, ${YYYY}`
  }

  function onClick() {
    loading = true
    mutateUpdateSubscription(subscription.id, plan.id)
      .then((data) => {
        onPlanChangeSuccess(newName)
        closeDialog()
        return data
      })
      .catch(onPlanChangeError)
      .finally(() => {
        DialogPromise.locking = DialogLock.FREE
      })
  }
</script>

<Dialog {...$$props} noTitle bind:closeDialog>
  <div class="dialog body-2">
    <div class="h4 txt-m row v-center mrg-m mrg--b">
      You're {isUpgrade ? 'upgrading' : 'downgrading'} to {newName}
      {newBilling} plan

      <Svg id="close" class="btn mrg-a mrg--l close-1GpP11" on:click={closeDialog} w="12" />
    </div>

    <p>
      Your current plan ({currentPlanName}
      {formatPrice(currentPlan)}/{currentPlan.interval}ly) is active until {formatDate()}. Starting
      from this date your card will be charged {formatPrice(plan)} per {plan.interval}.{isNewBillingMonthly
        ? ' With annual plan you can save up to 10%. '
        : ''}
      <a href="/account" class="btn">Update your billing information here.</a>
    </p>

    <div class="mrg-xl mrg--t">
      <button class="btn-1" class:btn--orange={isUpgrade} class:loading on:click={onClick}
        >{isUpgrade ? 'Upgrade' : 'Downgrade'} to {newName} {newBilling} plan</button
      >

      <button class="btn-2 mrg-l mrg--l" on:click={closeDialog}>Cancel</button>
    </div>
  </div>
</Dialog>

<style>
  .dialog {
    padding: 24px 32px;
    max-width: 600px;
  }

  :global(.close-1GpP11) {
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }

  p {
    color: var(--fiord);
  }

  a {
    --color: var(--green);
    --color-hover: var(--green-hover);
  }
</style>
