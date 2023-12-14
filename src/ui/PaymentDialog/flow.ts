import { mutateCreateStripeSetupIntent } from './api'

export async function startPaymentIntentFlow(
  stripe: stripe.Stripe,
  card: any,
  billing_details: any,
) {
  const clientSecret = await mutateCreateStripeSetupIntent()

  console.log({ card, billing_details })
  return stripe
    .confirmCardSetup(clientSecret, {
      payment_method: {
        card,
      },
    })
    .then(console.log)
    .catch(console.log)
}
