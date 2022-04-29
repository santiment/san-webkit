<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import PlanChangeDialog from './PlanChangeDialog.svelte'

  export const showPlanChangeDialog = (props?: any) => dialogs.show(PlanChangeDialog, props)
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import { DialogLock } from '@/ui/Dialog/dialogs'
  import Svg from '@/ui/Svg/svelte'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import { Billing, formatPrice, PlanName } from '@/utils/plans'

  export let DialogPromise: SAN.DialogController
  export let plan
  export let currentPlan
  export let isUpgrade = false
  export let onSuccess
  export let onError

  let closeDialog
  let loading = false

  $: newName = PlanName[plan.name] || plan.name
  $: isNewBillingMonthly = plan.interval === Billing.MONTH
  $: newBilling = isNewBillingMonthly ? 'Monthly' : 'Annual'
  $: currentPlanName = PlanName[currentPlan.name] || currentPlan.name
</script>

<Dialog {...$$props} noTitle bind:closeDialog>
  <div class="dialog body-2">
    <div class="h4 txt-m row v-center mrg-m mrg--b">
      You're {isUpgrade ? 'upgrading' : 'downgrading'} to {newName}
      {newBilling} plan

      <Svg id="close" class="btn mrg-a mrg--l $style.close" on:click={closeDialog} w="12" />
    </div>

    <p>
      Your current plan ({currentPlanName}
      {formatPrice(currentPlan)}/{currentPlan.interval}ly) is active until November 07, 2022.
      Starting from this date your card will be charged {formatPrice(plan)} per {plan.interval}.{isNewBillingMonthly
        ? ' With annual plan you can save up to 10%. '
        : ''}
      <a href="/account" class="btn">Update your billing information here.</a>
    </p>

    <div class="mrg-xl mrg--t">
      <button class="btn-1" class:btn--orange={isUpgrade}
        >{isUpgrade ? 'Upgrade' : 'Downgrade'} to {newName} {newBilling} plan</button
      >

      <button class="btn-2 mrg-l mrg--l" on:click={closeDialog}>Cancel</button>
    </div>
  </div>
</Dialog>

<style lang="scss">
  .dialog {
    padding: 24px 32px;
    max-width: 600px;
  }

  .close {
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
