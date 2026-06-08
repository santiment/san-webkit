export const AFFILIATLY_PROXY_ROUTE = '/api/track/affiliatly'

export const TRACKING_QUERY_KEYS = [
  'aff',
  'fid',
  'ref',
  'air',
  'rfsn',
  'aa',
  'tr',
  'abc',
  'coupon-code',
  'hair',
] as const

const CLEANUP_KEYS = [...TRACKING_QUERY_KEYS, 'fpr', 'qr']

type TConversionOptions = {
  couponCode?: string
  clientEmail?: string
}

function reportConversion(order: string | number, price: number, options?: TConversionOptions) {
  const payload = new URLSearchParams({
    order: String(order),
    price: String(price),
  })

  if (options?.couponCode) payload.append('coupon_code', options.couponCode)
  if (options?.clientEmail) payload.append('client_email', options.clientEmail)

  fetch(`${AFFILIATLY_PROXY_ROUTE}/conversion`, {
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

export function trackAffiliatlyVisit(searchParams: URLSearchParams) {
  if (!CLEANUP_KEYS.some((key) => searchParams.has(key))) return

  fetch(`${AFFILIATLY_PROXY_ROUTE}/user?${searchParams}`, {
    method: 'POST',
    credentials: 'same-origin',
  }).catch((error) => console.error(error))

  const url = new URL(location.href)
  for (const key of CLEANUP_KEYS) url.searchParams.delete(key)
  history.replaceState(history.state, '', url)
}
