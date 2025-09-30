import { BROWSER } from 'esm-env';
import { setUser } from '@sentry/sveltekit';
import { createCtx } from '../../utils/index.js';
import { DEFAULT, loadCustomerData } from './api.js';
export const useCustomerCtx = createCtx('useCustomerCtx', (initialValue) => {
    const defaultValue = Object.assign({}, DEFAULT, initialValue);
    let state = $state.raw(defaultValue);
    let currentUser = $state(defaultValue.currentUser);
    if (BROWSER)
        reload();
    function reload() {
        return loadCustomerData(fetch, (data) => {
            const customer = Object.assign({}, state, data);
            state = customer;
            currentUser = state.currentUser;
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
                return state;
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
