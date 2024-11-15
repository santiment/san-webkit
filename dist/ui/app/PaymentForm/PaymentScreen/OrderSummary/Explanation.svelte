<script lang="ts">
  import { useCustomerCtx } from '../../../../../ctx/customer/index.js'
  import { getFormattedMonthDayYear, modifyDate } from '../../../../../utils/dates/index.js'
  import Svg from '../../../../core/Svg/index.js'
  import { cn } from '../../../../utils/index.js'
  import { usePaymentFormCtx } from '../../state.js'

  let { price = 99999 } = $props()

  const { customer } = useCustomerCtx()
  const { paymentForm, subscriptionPlan, billingPeriod } = usePaymentFormCtx()

  const now = new Date()
  const trialLastChangeDate = modifyDate(new Date(now), { days: +13 })
  const trialEndDate = modifyDate(new Date(now), { days: +14 })

  let isCardPayment = $derived(paymentForm.$.isCardPayment)
  let isConsumerPlan = $derived(!subscriptionPlan.$.formatted?.isBusiness)

  const CARD_STEPS = [
    {
      icon: { id: 'star-filled', class: 'fill-orange' },
      name: 'Today - Your 14-Day Trial starts',
      description: 'Dive into all the features and tools our platform offers with full access',
    },
    {
      icon: { id: 'bell' },
      name: getFormattedMonthDayYear(trialLastChangeDate) + ' - Last day to change your Plan',
      description:
        'Review your needs and adjust your plan settings by today to ensure the best fit for your requirements',
    },
    {
      icon: { id: 'wallet' },
      name: getFormattedMonthDayYear(trialEndDate) + ' - Your new subscription starts',
      description:
        'Your selected plan will activate automatically, ensuring uninterrupted service and access',
    },
  ]

  const CRYPTO_STEPS = [
    {
      icon: { id: 'comment' },
      name: 'Today - Your are requesting your free trial',
      description: 'Santiment support team is always here for you. Contact us',
    },
    {
      icon: { id: 'star' },
      name: 'Your 14-Day Trial starts',
      description: 'Dive into all the features and tools our platform offers with full access',
    },
    {
      icon: { id: 'wallet' },
      name: 'Last Day of the Trial',
      description:
        'Review your needs, adjust your plan settings. We will be happy to guide you through the payment process',
    },
    {
      icon: { id: 'confetti', w: 15, h: 19 },
      name: 'Your New Subscription Starts',
      description: '',
    },
  ]
</script>

{#if isConsumerPlan && customer.$.isEligibleForSanbaseTrial}
  <h2 class="text-base font-semibold text-rhino">How the Trial Works</h2>

  <div class="relative gap-4 fill-waterloo pl-9 pr-16 text-waterloo column md:pr-0">
    {#snippet Step({
      name,
      icon,
      description,
    }: {
      name: string
      description: string
      icon: { class?: string; id: string }
    })}
      <div class="step relative before:absolute">
        <h3 class="items-center font-medium text-rhino row">
          <Svg w="12" {...icon} class={cn('absolute -left-8 bg-athens', icon.class)}></Svg>
          {name}
        </h3>
        {#if description}
          <p class="mt-1">{description}</p>
        {/if}
      </div>
    {/snippet}

    {#each isCardPayment ? CARD_STEPS : CRYPTO_STEPS as step}
      {@render Step(step)}
    {/each}
  </div>
{:else if isCardPayment}
  Your subscription will automatically renew each {billingPeriod.$}. You will be charged ${price} on
  your next billing cycle. You can cancel your subscription in Account settings at any time.
{:else}
  With the chosen payment method, your subscription will not renew automatically. You'll receive a
  friendly email reminder with easy steps to activate your subscription when you're ready.
{/if}

<style>
  .step {
    &::before {
      top: 4px;
      left: -26.5px;
      border-left: 1px dashed var(--mystic);
      height: calc(100% + 28px);
    }

    &:last-of-type::before {
      display: none;
    }
  }
</style>
