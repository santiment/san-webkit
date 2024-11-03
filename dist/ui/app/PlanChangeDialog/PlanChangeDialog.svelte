<script module lang="ts">
  import Component from './PlanChangeDialog.svelte'

  export const showPlanChangeDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

  import { onMount } from 'svelte'
  import { trackEvent } from '../../../analytics/index.js'
  import Dialog, { dialogs$, type TDialogProps } from '../../core/Dialog/index.js'
  import Button from '../../core/Button/index.js'
  import { notification } from '../../core/Notifications/index.js'
  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import { Query } from '../../../api/executor.js'
  import { getFormattedMonthDayYear } from '../../../utils/dates/index.js'
  import { mutateUpdateSubscription } from './api.js'
  import { getFormattedBillingPlan, getPlanName } from '../SubscriptionPlan/utils.js'

  let {
    source = '',
    newPlan,
    onSuccess,
    Controller,
  }: TDialogProps & {
    newPlan: TSubscriptionPlan
    onSuccess?: () => void
  } = $props()

  const { customer } = useCustomerCtx()

  const formatDate = (date: string | number = Date.now()) =>
    getFormattedMonthDayYear(new Date(date))

  let loading = $state(false)

  function onChangeClick() {
    const { primarySubscription } = customer.$
    if (!primarySubscription) return
    if (loading) return

    const planDisplayName = getPlanName(newPlan)
    loading = true
    Controller.lock()

    mutateUpdateSubscription(Query)(primarySubscription.id, newPlan.id)
      .then(() => {
        customer.reload()
        Controller.close(true)
        onSuccess?.()

        // TODO: Remove
        window.__updateLegacyStoresOnPlanChange?.(newPlan)
        notification.success(`You have successfully changed your plan to the "${planDisplayName}"!`)
      })
      .catch(() => {
        notification.error(`Error during plan change`)
      })
      .finally(() => {
        loading = false
        Controller.unlock()
      })
  }

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'plan_change_dialog', source })

    return () => trackEvent('dialog', { action: 'close', type: 'plan_change_dialog', source })
  })
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

      <Button
        href="/account"
        class="mt-4 text-green"
        data-type="update_billing"
        data-source="plan_change_dialog">Update your billing information here.</Button
      >
    </p>

    <section class="mt-6 flex gap-2">
      <Button {loading} variant="fill" onclick={onChangeClick}>Change plan</Button>
      <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
    </section>
  </Dialog>
{/if}
