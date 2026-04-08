import { Query } from '$lib/api/executor.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { createCtx } from '$lib/utils/index.js'

import { queryCurrentJti } from './api.js'
import { createSocketApi } from './service.js'
import { Socket } from './ws.js'

const KEY = 'useWebsocketApiCtx'

type TSocketInitStatus = 'loading' | 'ready' | 'error'
type TDeferred<T> = {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (error: Error) => void
}

export const useWebsocketApiCtx = createCtx(KEY, () => {
  const { currentUser } = useCustomerCtx()

  let socket = $state<Socket>()
  let currentUserJti = $state<string | null>(null)
  let initStatus = $state<TSocketInitStatus>('loading')
  let initError = $state<Error | null>(null)

  const userId = $derived(currentUser.$$?.id)

  let authRequestId = 0
  let authTask: Promise<void> | null = null
  let socketReadyResolve: ((socket: Socket) => void) | null = null
  const socketReadyPromise = new Promise<Socket>((resolve) => {
    socketReadyResolve = resolve
  })
  let authSocketDeferred: TDeferred<Socket> | null = null

  function getAuthSocketDeferred() {
    if (authSocketDeferred) return authSocketDeferred

    let resolve!: (socket: Socket) => void
    let reject!: (error: Error) => void

    const promise = new Promise<Socket>((res, rej) => {
      resolve = res
      reject = rej
    })

    authSocketDeferred = { promise, resolve, reject }
    return authSocketDeferred
  }

  function clearAuthSocketDeferred() {
    authSocketDeferred = null
  }

  function settleAuthSocket(type: 'resolve', socket: Socket): void
  function settleAuthSocket(type: 'reject', error: Error): void
  function settleAuthSocket(type: 'resolve' | 'reject', value: Socket | Error) {
    if (type === 'resolve') {
      authSocketDeferred?.resolve(value as Socket)
    } else {
      authSocketDeferred?.reject(value as Error)
    }

    clearAuthSocketDeferred()
  }

  $effect(() => {
    const nextSocket = new Socket(currentUserJti ? { jti: currentUserJti } : {})

    socket = nextSocket
    socketReadyResolve?.(nextSocket)
    socketReadyResolve = null

    if (currentUserJti && initStatus === 'ready') {
      settleAuthSocket('resolve', nextSocket)
    }

    return () => {
      if (socket === nextSocket) {
        socket = undefined
      }

      nextSocket.disconnect()
    }
  })

  $effect(() => {
    const nextUserId = userId
    const requestId = ++authRequestId

    initError = null

    if (!nextUserId) {
      currentUserJti = null
      initStatus = 'ready'
      authTask = null
      settleAuthSocket(
        'reject',
        new Error('Authenticated socket is unavailable without a logged in user'),
      )
      return
    }

    currentUserJti = null
    initStatus = 'loading'
    authTask = queryCurrentJti(Query)()
      .then((jti) => {
        if (requestId !== authRequestId) return

        currentUserJti = jti
        initStatus = 'ready'
      })
      .catch((err: unknown) => {
        if (requestId !== authRequestId) return

        currentUserJti = null
        initError = err instanceof Error ? err : new Error('Failed to load websocket auth token')
        initStatus = 'error'
        settleAuthSocket('reject', initError)

        console.error('Failed to initialize websocket auth', err)
      })
  })

  function waitForSocket() {
    if (socket) return Promise.resolve(socket)

    return socketReadyPromise
  }

  function waitForAuthenticatedSocket() {
    if (!userId) {
      return Promise.reject(
        new Error('Authenticated socket is unavailable without a logged in user'),
      )
    }

    if (socket && currentUserJti && initStatus === 'ready') {
      return Promise.resolve(socket)
    }

    if (initStatus === 'error') {
      return Promise.reject(initError ?? new Error('Failed to initialize authenticated socket'))
    }

    if (!authTask) {
      return Promise.reject(new Error('Authenticated websocket token is unavailable'))
    }

    return getAuthSocketDeferred().promise
  }

  return createSocketApi({
    waitForSocket,
    waitForAuthenticatedSocket,
  })
})
