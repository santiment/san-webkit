import { mutate } from './../../api/index.js';
export const mutateCreateStripeSetupIntent = () => mutate(`mutation {
   createStripeSetupIntent { clientSecret }
 }`).then((data) => data.createStripeSetupIntent.clientSecret);
export const mutateSubscribe = (variables) => mutate(`mutation($cardToken:String, $coupon:String, $paymentMethodId: String, $planId: Int!) {
    subscribe(cardToken:$cardToken, coupon:$coupon , paymentMethodId:$paymentMethodId, planId:$planId) {
      id
      trialEnd
      plan {
        id
        name
        amount
        product {
          id
        }
      }
    }
  }`, { variables });
//# sourceMappingURL=api.js.map