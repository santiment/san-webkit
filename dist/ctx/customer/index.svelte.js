import { ss } from 'svelte-runes';
import { BROWSER } from 'esm-env';
import { setUser } from '@sentry/sveltekit';
import { createCtx } from '../../utils/index.js';
import { DEFAULT, loadCustomerData } from './api.js';
export const useCustomerCtx = createCtx('useCustomerCtx', (initialValue) => {
    const defaultValue = Object.assign({}, DEFAULT, initialValue);
    const customer = ss(defaultValue);
    let currentUser = $state(defaultValue.currentUser);
    if (BROWSER)
        reload();
    function reload() {
        return loadCustomerData(fetch, (data) => {
            Object.assign(customer.$, data);
            customer.$ = customer.$;
            currentUser = customer.$.currentUser;
            if (currentUser) {
                const { id, username } = currentUser;
                try {
                    setUser({ id, username: username || '' });
                }
                catch (e) {
                    console.error(e);
                }
            }
        });
    }
    return {
        customer: {
            get $() {
                return customer.$;
            },
            reload,
        },
        currentUser: {
            get $$() {
                return currentUser;
            },
        },
    };
});
