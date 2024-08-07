import { Fetcher, Mutation } from '../../../api/index.js';
export const mutateSubscribe = Mutation((variables) => ({
    schema: `mutation($cardToken:String, $coupon:String, $paymentMethodId: String, $planId: Int!) {
    subscribe(cardToken:$cardToken, coupon:$coupon , paymentMethodId:$paymentMethodId, planId:$planId) {
      id
      trialEnd
      status
      paymentIntent { status clientSecret }
      plan {
        id
        name
        amount
        product {
          id
        }
      }
    }
  }`,
    variables,
}), (gql) => gql.subscribe);
export const queryDiscountCoupon = Fetcher((coupon) => `{
  getCoupon(coupon:"${coupon}") {
    isValid
    percentOff
  }
}`, (gql) => gql.getCoupon, { cache: false });
