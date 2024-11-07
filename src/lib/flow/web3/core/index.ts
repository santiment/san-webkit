import type { GetAccountReturnType, WatchAccountParameters } from '@wagmi/core'
import type { EventsControllerState } from '@reown/appkit'
import { BROWSER } from 'esm-env'
import { Observable } from 'rxjs'
import { getAppKit, getConfig } from './config.js'

export async function signMessage(message: string) {
  const config = await getConfig()
  const { signMessage: wagmiSignMessage } = await import('@wagmi/core')

  const messageHash = (await import('viem')).hashMessage(message)
  const signature = await wagmiSignMessage(config, { message })

  return { messageHash, signature }
}

export async function getAccount() {
  const config = await getConfig()
  const { getAccount } = await import('@wagmi/core')
  return getAccount(config)
}

export async function connectAccounts() {
  const config = await getConfig()
  const { connect, injected } = await import('@wagmi/core')
  return connect(config, { connector: injected() })
}

export async function disconnectAccount() {
  if (BROWSER) {
    window.localStorage.removeItem('wagmi.store')
  }

  const config = await getConfig()

  config.connectors.forEach((connector) => {
    try {
      connector.disconnect?.()
    } catch (e) {
      console.error(e)
    }
  })
}

export async function watchAccount(onChange: WatchAccountParameters<any>['onChange']) {
  const config = await getConfig()

  const { watchAccount } = await import('@wagmi/core')
  return watchAccount(config, { onChange })
}

export function watchAccount$() {
  return new Observable<GetAccountReturnType<any>>((subscriber) => {
    const promise = watchAccount((value) => subscriber.next(value))

    return () => promise.then((cleanup) => cleanup())
  })
}

export function appKitEvents$() {
  return new Observable<EventsControllerState>((subscriber) => {
    const promise = getAppKit().then((appKit) =>
      appKit?.subscribeEvents((event) => subscriber.next(event)),
    )

    return () => promise.then((cleanup) => cleanup?.())
  })
}
