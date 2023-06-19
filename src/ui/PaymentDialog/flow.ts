import { mutate } from '@/api'

export const mutateCreateStripeSetupIntent = () =>
  mutate<SAN.API.Query<'createStripeSetupIntent', { clientSecret: string }>>(`mutation {
  createStripeSetupIntent { clientSecret }
}`).then((data) => data.createStripeSetupIntent.clientSecret)

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
