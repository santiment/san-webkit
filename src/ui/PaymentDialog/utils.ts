import { track, Tracker } from '@/analytics'
import { trackTwitterPurchaseEvent, TwitterTrackActions } from '@/analytics/twitter'
import { mutateSubscribe } from '@/api/plans'
import { PlanName } from '@/utils/plans'
import { notifications$ } from '@/ui/Notifications'
import { paymentCard$ } from '@/stores/paymentCard'
import {
  trackPaymentFail,
  trackPaymentFormSubmitted,
  trackPaymentSuccess,
} from '@/analytics/events/payment'

export const CardBrandIllustration = {
  MasterCard: { id: 'mastercard', w: 33, h: 20 },
  Visa: { id: 'visa', w: 46.5, h: 16 },
}

export const checkSanDiscount = (sanBalance: number) => sanBalance >= 1000

export function mapPlans(plans: SAN.Plan[], ...plansFilters: ((plan: SAN.Plan) => boolean)[]) {
  const PlanBillings = {} as { [key: string]: SAN.Plan[] }

  plans.forEach((plan) => {
    if (!plansFilters.every((f) => f(plan))) return

    const planBillings = PlanBillings[plan.name]
    if (planBillings) planBillings.push(plan)
    else PlanBillings[plan.name] = [plan]
  })

  return (Object.values(PlanBillings) as any).flat()
}

type Data = { [key: string]: any }
function getFormData<T extends Data>(form: HTMLFormElement): T {
  const data = {}
  new FormData(form).forEach((value, key) => (data[key] = value))
  return data as T
}

type FormData = {
  name: string
  discount?: string
}
export function getPaymentFormData(form: HTMLFormElement) {
  const data = getFormData<FormData>(form)

  const discount = form.discount as undefined | HTMLInputElement
  if (discount && discount.dataset.isValid !== 'true') {
    delete data.discount
  }

  return data
}

function submitPayment(
  plan: SAN.Plan,
  discount: any,
  source: string,
  cardTokenId?: string,
  hasSanTokensDiscount = false,
) {
  // track.event('Payment form submitted', { category: 'User' })
  trackPaymentFormSubmitted({
    plan: plan.name,
    planId: +plan.id,
    amount: plan.amount,
    billing: plan.interval,
    promocode: discount,
    hasSanTokensDiscount,
    source,
  })
  return mutateSubscribe(cardTokenId, +plan.id, discount)
}

export function createCardToken(
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  checkoutInfo: { [key: string]: any },
) {
  return stripe.createToken(card, checkoutInfo).then(({ token, error }) => {
    if (error) return Promise.reject(error)
    if (!token) return Promise.reject('Stripe token is missing')
    return token
  })
}

export function buyPlan(
  customer$: SAN.CustomerStore,
  plan: SAN.Plan,
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  form: { [key: string]: any },
  source: string,
  savedCard?: SAN.PaymentCard,
  hasSanTokensDiscount = false,
) {
  const { discount, ...checkoutInfo } = form

  const promise = savedCard
    ? submitPayment(plan, discount, source, undefined, hasSanTokensDiscount)
    : createCardToken(stripe, card, checkoutInfo).then((token) => {
        return submitPayment(plan, discount, source, token.id, hasSanTokensDiscount)
      })

  return promise
    .then((data) => onPaymentSuccess(data, source, customer$))
    .catch((data) => onPaymentError(data, source))
}

export function onPaymentSuccess(data, source, customer$: SAN.CustomerStore, method?: string) {
  const { plan } = data
  const { name, amount } = plan
  const title = PlanName[name] || name

  trackTwitterPurchaseEvent()

  track.event(
    TwitterTrackActions.purchase,
    {
      value: amount.toString(),
      currency: 'USD',
      num_items: '1',
    },
    [Tracker.TWQ],
  )

  // track.event('Payment success', { category: 'User' })
  trackPaymentSuccess(source, method)

  notifications$.show({
    type: 'success',
    title: `You have successfully upgraded to the "${title}" plan!`,
  })
  customer$.refetch()
  paymentCard$.refetch()
  return Promise.resolve(data)
}

export function onPaymentError(error, source, method?: string) {
  // track.event('Payment failed', { category: 'User' })
  trackPaymentFail(source, method)

  notifications$.show({
    type: 'error',
    title: `Error during the payment`,
  })

  return Promise.reject(error)
}
