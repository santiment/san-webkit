import { track } from '../../analytics'
import { mutateSubscribe } from '../../api/plans'

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

export function buyPlan(
  plan: SAN.Plan,
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  form: { [key: string]: any },
) {
  const { discount, ...checkoutInfo } = form

  return stripe.createToken(card, checkoutInfo).then(({ token, error }) => {
    if (error) return Promise.reject(error)
    if (!token) return Promise.reject('Stripe token is missing')

    track.event('upgrade', { method: 'Payment submitted' })

    return mutateSubscribe(token.id, +plan.id, discount)
      .then(onPaymentSuccess)
      .catch(onPaymentError)
  })
}

function onPaymentSuccess(data) {
  track.event('upgrade', { method: 'Payment success' })
  return Promise.resolve(data)
}

function onPaymentError(error) {
  track.event('upgrade', { method: 'Payment fail' })
  return Promise.reject(error)
}
