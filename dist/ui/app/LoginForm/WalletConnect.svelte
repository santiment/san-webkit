<script lang="ts">
  import type { EventsControllerState } from '@reown/appkit'

  import { onMount } from 'svelte'
  import { filter, from, merge, Subject, switchMap, takeUntil, tap } from 'rxjs'

  import Button from '../../core/Button/index.js'
  import { appKitEvents$, disconnectAccount, watchAccount$ } from '../../../flow/web3/core/index.js'
  import { useWalletConnectLoginFlow } from '../../../flow/web3/wallet.js'
  import { getAppKit } from '../../../flow/web3/core/config.js'
  import { useObserveFnCall } from '../../../utils/observable.svelte.js'
  import { cn } from '../../utils/index.js'
  import { trackAuth } from '../../../analytics/events/auth.js'

  import walletConnectSvg from './wallet-connect.svg'

  let {
    class: className,
    isSignUp,
    onLoginComplete,
  }: {
    class?: string
    isSignUp: boolean
    onLoginComplete?: (user: null | { id: string }) => void
  } = $props()

  const { loginWithWallet } = useWalletConnectLoginFlow(isSignUp, onLoginComplete)

  let loading = $state(false)

  const startWalletConnectLoginFlow = useObserveFnCall(() => {
    const modalClosed$ = new Subject<void>()

    function handleModalClose({ data }: EventsControllerState) {
      if (data.event === 'MODAL_CLOSE' && !loading) {
        modalClosed$.next()
      }
    }

    trackAuth('wallet', isSignUp)

    return switchMap(() =>
      from(getAppKit()).pipe(
        filter((appKit) => !!appKit),
        tap((appKit) => appKit.open({ view: 'Connect' })),
        switchMap(() =>
          merge(
            appKitEvents$().pipe(tap(alertPendingRequest), tap(handleModalClose)),
            watchAccount$().pipe(
              filter((account) => (account.address && account.isConnected ? true : false)),
              tap(() => (loading = true)),
              switchMap((account) => from(loginWithWallet(account.address!))),
              tap(() => (loading = false)),
              tap(disconnectAccount),
              tap(() => modalClosed$.next()),
            ),
          ),
        ),
        takeUntil(modalClosed$),
      ),
    )
  })

  function alertPendingRequest({ data }: EventsControllerState) {
    if (data.event === 'CONNECT_ERROR' && data.properties.message.includes('already pending for')) {
      alert('Browser wallet already has a pending connection request')
    }
  }

  onMount(() => {
    disconnectAccount() // NOTE(vanguard): Forcing account disconnect before creating appkit
    getAppKit()
  })
</script>

<Button
  variant="border"
  size="lg"
  onclick={startWalletConnectLoginFlow}
  {loading}
  class={cn('w-full !border-porcelain center hover:text-green', className)}
>
  <img src={walletConnectSvg} alt="WC" class="w-[16px]" />
  {isSignUp ? 'Sign up' : 'Log in'} with WalletConnect
</Button>
