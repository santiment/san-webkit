import { writable } from 'svelte/store';
import { clearPaymentCardQuery, queryPaymentCard } from './../api/subscription';
const store = { fetched: false, value: null };
const { subscribe, set } = writable(store.value);
const reset = () => set(null);
export const paymentCard$ = {
    set,
    query() {
        store.fetched = true;
        return queryPaymentCard().then(set).catch(reset);
    },
    subscribe(run, invalidate) {
        if (!store.fetched)
            paymentCard$.query();
        return subscribe(run, invalidate);
    },
    clear() {
        clearPaymentCardQuery();
        store.fetched = false;
    },
    refetch() {
        paymentCard$.clear();
        return paymentCard$.query();
    },
    setDefault() {
        reset();
    },
};
//# sourceMappingURL=paymentCard.js.map