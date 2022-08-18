import { writable } from 'svelte/store';
import { initStripe, bootStripe } from './../analytics/stripe';
let loaded = false;
const { subscribe, set } = writable(null);
const onLoad = () => set(bootStripe());
export const stripe = {
    load() {
        if (loaded || process.browser !== true)
            return;
        loaded = true;
        initStripe(onLoad);
        if (process.env.IS_DEV_MODE) {
            console.log('%c[DEV ONLY]', 'background:#FFCB47;color:black;padding:3px;border-radius:4px', 'Preloading stripe');
        }
    },
    subscribe(run, invalidate) {
        stripe.load();
        return subscribe(run, invalidate);
    },
};
//# sourceMappingURL=stripe.js.map