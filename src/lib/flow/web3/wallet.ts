import type { GetAccountReturnType } from '@wagmi/core'
import { catchError, exhaustMap, filter, from, mergeMap, of, tap } from 'rxjs'
import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { getAccount, connectAccounts, signMessage } from './core/index.js'
import { mutateAddUserEthAddress } from './api.js'

export function useConnectMetamaskFlow() {
  const { currentUser } = useCustomerCtx()

  const onConnectMetamaskClick = useObserveFnCall(() =>
    exhaustMap(() =>
      from(connectAccounts()).pipe(
        mergeMap(() => from(getAccount())),
        filter(
          (account): account is GetAccountReturnType & { address: string } => !!account.address,
        ),

        mergeMap(({ address }) =>
          from(signMessage(`Login in Santiment with address ${address}`)).pipe(
            mergeMap((signedData) => mutateAddUserEthAddress()({ ...signedData, address })),
            tap((data) => currentUser.$$ && (currentUser.$$.ethAccounts = data.ethAccounts)),
          ),
        ),

        catchError((e) => of(null).pipe(tap(() => console.error(e)))),
      ),
    ),
  )

  return { onConnectMetamaskClick }
}
