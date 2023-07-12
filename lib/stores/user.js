import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { Universal, query } from './../api';
import { Cache } from './../api/cache';
import { setSessionValue } from './utils';
export const ANNUAL_DISCOUT_FRAGMENT = `
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
`;
const CUSTOMER_DATA_QUERY = `{
  currentUser {
    sanBalance
    isEligibleForTrial:isEligibleForSanbaseTrial
  }
  ${ANNUAL_DISCOUT_FRAGMENT}
}`;
export const accessor = ({ currentUser, annualDiscount }) => Object.assign({ annualDiscount, isLoggedIn: !!currentUser }, currentUser);
export const queryCustomerData = () => query(CUSTOMER_DATA_QUERY).then(accessor);
export const DEFAULT = {
    isLoggedIn: false,
    sanBalance: 0,
    isEligibleForTrial: false,
    annualDiscount: undefined,
};
const { subscribe, set } = writable(DEFAULT);
export const customerData$ = {
    fetched: false,
    set,
    setValue(value) {
        customerData$.set(value);
        return value;
    },
    setDefault() {
        this.set(DEFAULT);
    },
    query() {
        this.fetched = true;
        return queryCustomerData()
            .then(this.setValue)
            .catch((e) => {
            console.error(e);
            this.set(DEFAULT);
        });
    },
    subscribe(run, invalidate) {
        if (!this.fetched)
            this.query();
        return subscribe(run, invalidate);
    },
    clear() {
        Cache.delete(CUSTOMER_DATA_QUERY);
        this.fetched = false;
    },
    refetch() {
        this.clear();
        return this.query();
    },
};
export const CURRENT_USER_FRAGMENT = `
    id
    email
    username
    name
    privacyPolicyAccepted
    marketingAccepted
    avatarUrl
    apikeys
    firstLogin
    isModerator
    isEligibleForTrial:isEligibleForSanbaseTrial
    settings {
      theme
      alertNotifyEmail
      alertNotifyTelegram
      hasTelegramConnected
      isPromoter
    }
    following {
      count
      users {id}
    }
    ethAccounts {
      address
    }  
`;
export const CURRENT_USER_QUERY = `
  {
    currentUser {
      ${CURRENT_USER_FRAGMENT}
    }
  }
`;
export const queryCurrentUser = Universal((query) => () => query(CURRENT_USER_QUERY));
const CTX = 'CurrentUser$$';
export function CurrentUser$$(currentUser) {
    const { set, subscribe } = writable(currentUser);
    const currentUser$ = {
        subscribe,
        set(currentUser) {
            setSessionValue({ currentUser });
            set(currentUser);
        },
    };
    return setContext(CTX, { currentUser$ });
}
export const getCurrentUser$Ctx = () => getContext(CTX);
//# sourceMappingURL=user.js.map