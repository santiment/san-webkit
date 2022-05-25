import { track, Tracker } from '@/analytics'
import { TwitterTrackActions } from '@/analytics/twitter'
import { mutateSubscribe } from '@/api/plans'
import { PlanName } from '@/utils/plans'
import { customerData$ } from '@/stores/user'
import { notifications } from '@/ui/Notifications'
import { subscription$ } from '@/stores/subscription'
import { paymentCard$ } from '@/stores/paymentCard'

export const CardBrandIllustration = {
  MasterCard: { id: 'mastercard', w: 33, h: 20 },
  Visa: { id: 'visa', w: 46.5, h: 16 },
}

export function mapPlans(plans: SAN.Plan[], plansFilter: (plan: SAN.Plan) => boolean) {
  const PlanBillings = {} as { [key: string]: SAN.Plan[] }

  plans.forEach((plan) => {
    if (!plansFilter(plan)) return

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

function submitPayment(plan: SAN.Plan, discount: any, cardTokenId?: string) {
  track.event('upgrade', { method: 'Payment submitted' })
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
  plan: SAN.Plan,
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  form: { [key: string]: any },
  savedCard?: SAN.PaymentCard,
) {
  const { discount, ...checkoutInfo } = form

  const promise = savedCard
    ? submitPayment(plan, discount)
    : createCardToken(stripe, card, checkoutInfo).then((token) => {
        return submitPayment(plan, discount, token.id)
      })

  return promise.then(onPaymentSuccess).catch(onPaymentError)
}

function onPaymentSuccess(data) {
  track.event('upgrade', { method: 'Payment success' })
  const { plan } = data
  const { name, amount } = plan
  const title = PlanName[name] || name

  track.event(
    TwitterTrackActions.purchase,
    {
      value: amount.toString(),
      currency: 'USD',
      num_items: '1',
    },
    [Tracker.TWQ],
  )

  notifications.show({
    type: 'success',
    title: `You have successfully upgraded to the "${title}" plan!`,
  })
  subscription$.refetch()
  customerData$.refetch()
  paymentCard$.refetch()
  return Promise.resolve(data)
}

function onPaymentError(error) {
  track.event('upgrade', { method: 'Payment fail' })
  notifications.show({
    type: 'error',
    title: `Error during the payment`,
  })

  return Promise.reject(error)
}
