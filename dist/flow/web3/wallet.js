import { catchError, exhaustMap, filter, from, mergeMap, of, tap } from 'rxjs';
import { Query } from '../../api/executor.js';
import { useObserveFnCall } from '../../utils/observable.svelte.js';
import { useCustomerCtx } from '../../ctx/customer/index.svelte.js';
import { getAccount, connectAccounts, signMessage } from './core/index.js';
import { mutateAddUserEthAddress, mutateEthLogin } from './api/index.js';
import { trackEvent } from '../../analytics/index.js';
export function useConnectMetamaskFlow() {
    const { currentUser } = useCustomerCtx();
    const onConnectMetamaskClick = useObserveFnCall(() => exhaustMap(() => from(connectAccounts()).pipe(mergeMap(() => from(getAccount())), filter((account) => !!account.address), mergeMap(({ address }) => from(signMessage(`Login in Santiment with address ${address}`)).pipe(mergeMap((signedData) => mutateAddUserEthAddress()({ ...signedData, address })), tap((data) => currentUser.$$ && (currentUser.$$.ethAccounts = data.ethAccounts)))), catchError((e) => of(null).pipe(tap(() => console.error(e)))))));
    return { onConnectMetamaskClick };
}
export function useWalletConnectLoginFlow(isSignUp = false, onLoginComplete) {
    const { customer } = useCustomerCtx();
    async function loginWithWallet(address) {
        const date = new Date();
        const trackEventData = {
            method: 'wallet_connect',
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            timestamp: +date,
        };
        trackEvent('auth_start', trackEventData);
        trackEvent(isSignUp ? 'signup_start' : 'login_start', trackEventData);
        try {
            const signedData = await signMessage(`Login in Santiment with address ${address}`);
            return mutateEthLogin(Query)({ ...signedData, address }).then((user) => {
                customer.reload().then(() => onLoginComplete?.(user));
                trackEvent('auth_finish', { ...trackEventData, is_new_user_signup: user.firstLogin });
                trackEvent(user.firstLogin ? 'signup_finish' : 'login_finish', trackEventData);
                return user;
            });
        }
        catch (e) {
            console.error(e);
            return Promise.resolve(null);
        }
    }
    return { loginWithWallet };
}
