<script module lang="ts">
  import Component from './PlanChangeDialog.svelte'

  export const showPlanChangeDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Button from '$ui/core/Button/index.js'
  import { getFormattedMonthDayYear } from '$lib/utils/dates.js'
  import { getFormattedBillingPlan } from '../SubscriptionPlan/utils.js'
  import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

  let { newPlan, Controller }: TDialogProps & { newPlan: TSubscriptionPlan } = $props()

  const { customer } = useCustomerCtx()

  const formatDate = (date: string | number = Date.now()) =>
    getFormattedMonthDayYear(new Date(date))
</script>

{#if customer.$.plan}
  {@const formattedPlan = getFormattedBillingPlan(customer.$.plan)}
  {@const newFormattedPlan = getFormattedBillingPlan(newPlan)}
  {@const activeUntilData = customer.$.primarySubscription?.currentPeriodEnd}
  <Dialog class="px-8 py-6">
    <header class="mb-4 text-xl">
      Changing plan to {newFormattedPlan.name} (${newFormattedPlan.price} / {newFormattedPlan.billing})
    </header>

    <p>
      Your current plan ({customer.$.planName}
      ${formattedPlan.price} / {formattedPlan.billing}) is active until {formatDate(
        activeUntilData,
      )}.
      <br />
      Starting from this date your card will be charged ${newFormattedPlan.price} per
      {newPlan.interval}.

      <Button href="/account" class="mt-4 text-green">Update your billing information here.</Button>
    </p>

    <section class="mt-6 flex gap-2">
      <Button href="/account" variant="fill">Change plan</Button>
      <Button href="/account" variant="border" onclick={Controller.close}>Cancel</Button>
    </section>
  </Dialog>
{/if}
