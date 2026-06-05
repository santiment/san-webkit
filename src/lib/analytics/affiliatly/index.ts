export const AFFILIATLY_PROXY_ROUTE = '/api/track/affiliatly'

type TConversionOptions = {
  couponCode?: string
  clientEmail?: string
}

async function reportConversion(
  order: string | number,
  price: number,
  options?: TConversionOptions,
) {
  const payload = new URLSearchParams({
    order: String(order),
    price: String(price),
  })

  if (options?.couponCode) payload.append('coupon_code', options.couponCode)
  if (options?.clientEmail) payload.append('client_email', options.clientEmail)

  await fetch(`${AFFILIATLY_PROXY_ROUTE}/conversion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload,
    credentials: 'same-origin',
  }).catch((error) => console.error(error))
}

export const trackAffiliatlySignup = (userId: string | number) => reportConversion(userId, 0)

export const trackAffiliatlyPayment = (
  orderId: string | number,
  amount: number,
  options?: TConversionOptions,
) => reportConversion(orderId, amount, options)

export async function trackAffiliatlyVisit(searchString: string) {
  if (!searchString) return

  await fetch(`${AFFILIATLY_PROXY_ROUTE}/user${searchString}`, {
    method: 'POST',
    credentials: 'same-origin',
  }).catch((error) => console.error(error))
}
