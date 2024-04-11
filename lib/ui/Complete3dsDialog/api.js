import { query } from './../../api/index.js';
export const queryGetSubscriptionWithPaymentIntent = (id) => query(`{
  data:getSubscriptionWithPaymentIntent(subscriptionId:"${id}") {
    paymentIntent {
      clientSecret
      status
    }
  }
}`, {
    cache: false,
}).then((data) => data.data.paymentIntent);
//# sourceMappingURL=api.js.map