import { query } from './../api';
import { Cache } from './../api/cache';
import { writable } from 'svelte/store';
const USER_SANBASE_SUBSCRIPTION_QUERY = `{
  currentUser {
    subscription:primaryUserSanbaseSubscription {
      id
      status
      trialEnd
      currentPeriodEnd
      cancelAtPeriodEnd
      plan {
        id
        name
        amount
        interval
      }
    }
  }
}`;
const querySanbaseSubscription = () => query(USER_SANBASE_SUBSCRIPTION_QUERY);
const store = {
    fetched: false,
    value: null,
};
const { subscribe, set } = writable(store.value);
function accessor({ currentUser }) {
    set((currentUser === null || currentUser === void 0 ? void 0 : currentUser.subscription) || null);
}
export const subscription$ = {
    set,
    query() {
        store.fetched = true;
        return querySanbaseSubscription().then(accessor);
    },
    subscribe(run, invalidate) {
        if (!store.fetched)
            subscription$.query();
        return subscribe(run, invalidate);
    },
    clear() {
        Cache.delete(USER_SANBASE_SUBSCRIPTION_QUERY);
        store.fetched = false;
    },
    refetch() {
        subscription$.clear();
        return subscription$.query();
    },
};
//# sourceMappingURL=subscription.js.map