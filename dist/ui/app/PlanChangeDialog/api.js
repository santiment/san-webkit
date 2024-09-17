import { Mutation } from '../../../api/index.js';
export const mutateUpdateSubscription = Mutation((currentSubscriptionId, planId) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`);
