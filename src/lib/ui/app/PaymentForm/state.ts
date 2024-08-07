import { ss, ssd, useObserve } from 'svelte-runes'
import { tap } from 'rxjs'
import { untrack } from 'svelte'
import { createCtx } from '$lib/utils/index.js'
import { Mutation } from '$lib/api/index.js'
import { CardMethod } from './PaymentScreen/PaymentMethodSelector/Card/index.js'
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'
import { queryProductsWithPlans, type TProductsWithPlans } from '../SubscriptionPlan/api.js'
import { getFormattedPlan } from '../SubscriptionPlan/utils.js'
import type { StripeAddressElement, StripeCardElement } from '@stripe/stripe-js'

const DEFAULT_PAYMENT_METHOD = CardMethod
export const usePaymentFormCtx = createCtx('usePaymentFormCtx', () => {
  const paymentForm = ss({
    isCardPayment: DEFAULT_PAYMENT_METHOD === CardMethod,

    setupIntentClientSecret: '',

    cardElement: null as null | StripeCardElement,
    addressElement: null as null | StripeAddressElement,
  })
  const billingPeriod = ss('month' as 'month' | 'year')
  const paymentMethod = ss(DEFAULT_PAYMENT_METHOD)
  const productsWithPlans = ss<TProductsWithPlans>([])
  const plan = ss({
    selected: null as null | TSubscriptionPlan,
    month: null as null | TSubscriptionPlan,
    year: null as null | TSubscriptionPlan,
    formatted: null as null | ReturnType<typeof getFormattedPlan>,
  })
  const coupon = ss(
    null as null | {
      value: string
      isValid: boolean
      percentOff: number
    },
  )
  const discount = ssd(() => {
    const selectedPlan = plan.$.selected
    if (!selectedPlan) return null
    if (plan.$.formatted?.isBusiness) return null

    const discountCoupon = coupon.$
    if (!discountCoupon || discountCoupon.isValid === false) return

    const amountOff = Math.floor(selectedPlan.amount * (discountCoupon.percentOff / 100))
    const amount = selectedPlan.amount - amountOff

    return {
      description: 'Promo code',
      percentOff: discountCoupon.percentOff,

      amount,
      amountOff,

      price: Math.ceil(amount / 100),
      priceOff: Math.floor(amountOff / 100),
    }
  })

  const update = () => {
    paymentForm.$ = paymentForm.$
  }

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans.$ = data))))

  useObserve(() =>
    mutateCreateStripeSetupIntent()().pipe(
      tap((clientSecret) => {
        paymentForm.$.setupIntentClientSecret = clientSecret
        update()
      }),
    ),
  )

  return {
    paymentForm,
    paymentMethod,
    billingPeriod,
    subscriptionPlan: plan,
    coupon,
    discount,

    selectPaymentMethod(option: typeof CardMethod) {
      paymentMethod.$ = option
      paymentForm.$.isCardPayment = option === CardMethod
      update()
    },

    selectSubscriptionPlan(selectedPlan: null | TSubscriptionPlan) {
      untrack(() => {
        if (!selectedPlan) {
          return (plan.$ = { selected: null, month: null, year: null, formatted: null })
        }

        // NOTE: Checking if a plan with a different name was selected
        if (plan.$.month?.name !== selectedPlan.name) {
          const productPlans = productsWithPlans.$.find(
            (product) => product.id === selectedPlan.product.id,
          )
          const [monthPlan, yearPlan] = productPlans?.plans
            .filter((plan) => plan.isDeprecated === false && plan.name === selectedPlan.name)
            .sort((a, b) => a.amount - b.amount) || [null, null]

          Object.assign(plan.$, {
            month: monthPlan,
            year: yearPlan,
            formatted: monthPlan && getFormattedPlan(monthPlan, yearPlan),
          })
          coupon.$ = null
        }

        billingPeriod.$ = selectedPlan.interval
        plan.$.selected = selectedPlan
        plan.$ = plan.$
      })
    },
  }
})

export const mutateCreateStripeSetupIntent = Mutation(
  () => `mutation { createStripeSetupIntent { clientSecret } }`,
  (data: { createStripeSetupIntent: { clientSecret: string } }) =>
    data.createStripeSetupIntent.clientSecret,
)
