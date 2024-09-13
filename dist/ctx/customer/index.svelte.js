import { createCtx } from '../../utils/index.js';
import { ss } from 'svelte-runes';
import { DEFAULT, loadCustomerData } from './api.js';
import { BROWSER } from 'esm-env';
export const useCustomerCtx = createCtx('useCustomerCtx', () => {
    const defaultValue = Object.assign({}, DEFAULT);
    const customer = ss(defaultValue);
    let currentUser = $state(defaultValue.currentUser);
    if (BROWSER)
        reload();
    function reload() {
        return loadCustomerData(fetch, (data) => {
            Object.assign(customer.$, data);
            customer.$ = customer.$;
            currentUser = customer.$.currentUser;
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
