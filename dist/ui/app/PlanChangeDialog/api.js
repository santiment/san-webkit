import { ApiMutation } from '../../../api/index.js';
export const mutateUpdateSubscription = ApiMutation((currentSubscriptionId, planId) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`);
