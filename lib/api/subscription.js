import { mutate, query } from '@/api';
import { Cache } from '@/api/cache';
const PAYMENT_CARD_QUERY = `{
  card: fetchDefaultPaymentInstrument {
    brand
    last4
    expMonth
    expYear
  }
}`;
const accessor = ({ card }) => card;
export const queryPaymentCard = () => query(PAYMENT_CARD_QUERY).then(accessor);
export const clearPaymentCardQuery = () => Cache.delete(PAYMENT_CARD_QUERY);
// ----------------------------------
const UPDATE_PAYMENT_CARD_MUTATION = (cardToken) => `mutation {
    updateDefaultPaymentInstrument(cardToken: "${cardToken}")
  }`;
export const mutateUpdatePaymentCard = (cardToken) => mutate(UPDATE_PAYMENT_CARD_MUTATION(cardToken));
// -------------------------------
const DELETE_PAYMENT_CARD_MUTATION = `mutation {
    deleteDefaultPaymentInstrument
  }`;
export const mutateDeletePaymentCard = () => mutate(DELETE_PAYMENT_CARD_MUTATION);
// ------------------------------------
export const UPDATE_SUBSCRIPTION_MUTATION = (currentSubscriptionId, planId) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`;
export const mutateUpdateSubscription = (currentSubscriptionId, planId) => mutate(UPDATE_SUBSCRIPTION_MUTATION(currentSubscriptionId, planId));
// ---------------------------
const BILLING_HISTORY_QUERY = `{
  payments {
    amount
    createdAt
    description
    status
  }
}`;
const billingHistoryAccessor = ({ payments }) => payments;
export const queryBillingHistory = () => query(BILLING_HISTORY_QUERY).then(billingHistoryAccessor);
// ----------------------------
const CANCEL_SUBSCRIPTION_MUTATION = (id) => `
  mutation {
    cancelSubscription(subscriptionId:${id}) {
      isScheduledForCancellation
      scheduledForCancellationAt
    }
  }
`;
export const mutateCancelSubscription = (id) => mutate(CANCEL_SUBSCRIPTION_MUTATION(id));
// ----------------------------
const UPCOMING_INVOICE_QUERY = (subscriptionId) => `{
  upcomingInvoice(subscriptionId: "${subscriptionId}") {
    dueDate:periodEnd
    amount:amountDue
  }
}`;
export const queryUpcomingInvoice = (subscriptionId) => query(UPCOMING_INVOICE_QUERY(subscriptionId));
//# sourceMappingURL=subscription.js.map