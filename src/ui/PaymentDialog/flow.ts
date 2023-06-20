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
  const { name, ...addressInfo } = billing_details

  console.log({ card, billing_details })
  return stripe
    .confirmCardSetup(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name,
          address: Object.keys(addressInfo).reduce((acc, key) => {
            acc[key.replace('address_', '')] = addressInfo[key]
            return acc
          }, {}),
        },
      },
    })
    .then(console.log)
    .catch(console.log)
}
