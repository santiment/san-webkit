export const AFFILIATLY_PROXY_ROUTE = '/api/track/affiliatly';
async function reportConversion(order, price, options) {
    const payload = new URLSearchParams({
        order: String(order),
        price: String(price),
    });
    if (options?.couponCode)
        payload.append('coupon_code', options.couponCode);
    if (options?.clientEmail)
        payload.append('client_email', options.clientEmail);
    await fetch(AFFILIATLY_PROXY_ROUTE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
        credentials: 'same-origin',
    }).catch((error) => console.error(error));
}
export const trackAffiliatlySignup = (userId) => reportConversion(userId, 0);
export const trackAffiliatlyPayment = (orderId, amount, options) => reportConversion(orderId, amount, options);
