<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import PlanChangeDialog from './PlanChangeDialog.svelte'

  export const showPlanChangeDialog = (props?: any) => dialogs.show(PlanChangeDialog, props)
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import { DialogLock } from '@/ui/Dialog/dialogs'
  import Svg from '@/ui/Svg/svelte'
  import { getCustomer$Ctx } from '@/stores/customer'
  import { Billing, formatPrice, getPlanDisplayName } from '@/utils/plans'
  import { getDateFormats } from '@/utils/dates'
  import { mutateUpdateSubscription } from '@/api/subscription'
  import { onPlanChangeError, onPlanChangeSuccess } from './utils'
  import { SANBASE_ORIGIN } from '@/utils/links'

  export let DialogPromise: SAN.DialogController
  export let plan
  export let isUpgrade = false

  let closeDialog
  let loading = false

  const { customer$ } = getCustomer$Ctx()

  const subscription = $customer$.subscription as SAN.Subscription
  const newName = getPlanDisplayName(plan)
  const isNewBillingMonthly = plan.interval === Billing.MONTH
  const newBilling = isNewBillingMonthly ? 'Monthly' : 'Annual'

  const { currentPeriodEnd = Date.now(), plan: currentPlan } = subscription
  const currentPlanName = getPlanDisplayName(currentPlan)

  function formatDate() {
    const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
    return `${MMMM} ${DD}, ${YYYY}`
  }

  function onClick() {
    loading = true

    mutateUpdateSubscription(subscription.id, plan.id)
      .then((data) => {
        onPlanChangeSuccess(customer$, newName)
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
    <div class="h4 txt-m row mrg-m mrg--b">
      You're {isUpgrade ? 'upgrading' : 'downgrading'} to {newName}
      {newBilling} plan

      <button class="close-btn btn row hv-center" on:click={closeDialog}>
        <Svg id="close" w="12" />
      </button>
    </div>

    <p>
      Your current plan ({currentPlanName}
      {formatPrice(currentPlan)}/{currentPlan.interval}ly) is active until {formatDate()}. Starting
      from this date your card will be charged {formatPrice(plan)} per {plan.interval}.{isNewBillingMonthly
        ? ' With annual plan you can save up to 10%. '
        : ''}
      <a href="{SANBASE_ORIGIN}/account" class="btn">Update your billing information here.</a>
    </p>

    <actions class="row mrg-xl mrg--t">
      <button
        class="submit-btn btn-1"
        class:btn--orange={isUpgrade}
        class:loading
        on:click={onClick}
      >
        {isUpgrade ? 'Upgrade' : 'Downgrade'} to {newName}
        {newBilling} plan
      </button>

      <button class="btn-2" on:click={closeDialog}>Cancel</button>
    </actions>
  </div>
</Dialog>

<style lang="scss">
  .dialog {
    padding: 24px 32px;
    max-width: 600px;
  }

  .close-btn {
    --fill: var(--waterloo);
    --fill-hover: var(--green);

    height: 24px;
    width: 24px;
    margin: 4px 0 0 8px;
  }

  p {
    color: var(--fiord);
  }

  a {
    --color: var(--green);
    --color-hover: var(--green-hover);
  }

  actions {
    gap: 16px;
  }

  :global(.phone),
  :global(.phone-xs) {
    actions {
      flex-direction: column;
      text-align: center;
    }

    .submit-btn {
      height: 40px;
    }
  }
</style>
