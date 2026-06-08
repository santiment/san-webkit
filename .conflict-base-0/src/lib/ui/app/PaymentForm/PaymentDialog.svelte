<script module lang="ts">
  import Component from './PaymentDialog.svelte'

  export const showPaymentDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

  import { onMount, type ComponentProps } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import ScreenTransition, { useScreenTransitionCtx } from '$ui/app/ScreenTransition/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { SCREENS, usePaymentFormCtx } from './state.js'
  import DialogHeader from './DialogHeader.svelte'
  import PlansScreen from './PlansScreen/index.svelte'
  import BillingPeriodSelector from './PaymentScreen/BillingPeriodSelector/index.svelte'
  import PaymentMethodSelector from './PaymentScreen/PaymentMethodSelector/index.svelte'
  import OrderSummary from './PaymentScreen/OrderSummary/index.svelte'

  type Props = TDialogProps &
    ComponentProps<typeof OrderSummary> & {
      defaultPlan?: null | TSubscriptionPlan

      triggeredBy?: {
        textContent?: null | string
        dataset: Partial<{ type: string; source: string }>
      }
    }

  let { source = '', triggeredBy, defaultPlan = null, onSuccess, onError }: Props = $props()

  const { subscriptionPlan, productsWithPlans } = usePaymentFormCtx({ defaultPlan })
  useCustomerCtx()
  const { screen } = useScreenTransitionCtx(SCREENS, SCREENS[defaultPlan ? 1 : 0])

  const trigger_type = triggeredBy?.dataset.type
  const trigger_source = triggeredBy?.dataset.source
  const trigger_label = triggeredBy?.textContent?.trim()

  onMount(() => {
    const analytics = {
      plan: defaultPlan?.name,
      plan_id: defaultPlan?.id,
      billing: defaultPlan?.interval,
      source,
      trigger_type,
      trigger_source,
      trigger_label,
    }
    trackEvent('payment_form_opened', analytics)
    trackEvent('dialog', { ...analytics, type: 'payment_dialog', action: 'open' })

    return () => {
      trackEvent('dialog', { ...analytics, action: 'close', type: 'payment_dialog' })
      trackEvent('payment_form_closed', { ...analytics, source })
    }
  })
</script>

<Dialog class="h-full w-full column">
  <DialogHeader disabled={subscriptionPlan.$.selected ? undefined : SCREENS[1]}></DialogHeader>

  {#if productsWithPlans.$.length === 0}
    <div class="skeleton absolute bottom-0 left-0 right-0 top-0 z-50"></div>
  {/if}

  <ScreenTransition
    class="gap-10 overflow-y-scroll bg-white px-36 pb-20 pt-16 column lg:p-10 md:px-0"
    dataType="change_payment_screen"
    dataSource="payment_form"
  >
    {#if screen.$ === SCREENS[0]}
      <PlansScreen onPlanSelect={() => (screen.$ = SCREENS[1])}></PlansScreen>
    {:else}
      <div class="flex gap-10 md:flex-wrap md:px-5">
        <div class="w-full min-w-[400px] gap-10 self-start column md:min-w-0 md:gap-12">
          <h1 class="color-rhino text-2xl font-medium md:text-3xl">
            {#if subscriptionPlan.$.formatted}
              {subscriptionPlan.$.formatted.name} plan
            {:else}
              Unknown plan
            {/if}
          </h1>

          <BillingPeriodSelector></BillingPeriodSelector>

          <PaymentMethodSelector></PaymentMethodSelector>
        </div>

        <OrderSummary {onSuccess} {onError}></OrderSummary>
      </div>
    {/if}
  </ScreenTransition>
</Dialog>
