import { BROWSER } from 'esm-env'

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
  let socketError = $state<Error | null>(null)

  const userId = $derived(currentUser.$$?.id)

  let authRequestId = 0
  let authTask: Promise<void> | null = null
  let socketDeferred: TDeferred<Socket> | null = null
  let authSocketDeferred: TDeferred<Socket> | null = null

  function createDeferred<T>() {
    let resolve!: (value: T) => void
    let reject!: (error: Error) => void

    const promise = new Promise<T>((res, rej) => {
      resolve = res
      reject = rej
    })

    return { promise, resolve, reject }
  }

  function ensureSocketDeferred() {
    return (socketDeferred ??= createDeferred<Socket>())
  }

  function ensureAuthSocketDeferred() {
    return (authSocketDeferred ??= createDeferred<Socket>())
  }

  function resolveSocket(value: Socket) {
    socketDeferred?.resolve(value)
    socketDeferred = null
  }

  function rejectSocket(error: Error) {
    socketDeferred?.reject(error)
    socketDeferred = null
  }

  function resolveAuthSocket(value: Socket) {
    authSocketDeferred?.resolve(value)
    authSocketDeferred = null
  }

  function rejectAuthSocket(error: Error) {
    authSocketDeferred?.reject(error)
    authSocketDeferred = null
  }

  $effect(() => {
    if (!BROWSER) return

    let isCancelled = false
    let nextSocket: Socket | undefined

    socket = undefined
    socketError = null

    import('phoenix')
      .then((phoenixLib) => {
        if (isCancelled) return

        nextSocket = new Socket(phoenixLib, currentUserJti ? { jti: currentUserJti } : {})

        if (isCancelled) {
          nextSocket.disconnect()
          return
        }

        socket = nextSocket
        resolveSocket(nextSocket)

        if (currentUserJti && initStatus === 'ready') {
          resolveAuthSocket(nextSocket)
        }
      })
      .catch((err: unknown) => {
        if (isCancelled) return

        socket = undefined
        socketError = err instanceof Error ? err : new Error('Failed to initialize websocket')
        rejectSocket(socketError)
        rejectAuthSocket(socketError)

        console.error('Failed to initialize websocket', err)
      })

    return () => {
      isCancelled = true

      if (socket === nextSocket) {
        socket = undefined
      }

      nextSocket?.disconnect()
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
      rejectAuthSocket(new Error('Authenticated socket is unavailable without a logged in user'))
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
        rejectAuthSocket(initError)

        console.error('Failed to initialize websocket auth', err)
      })
  })

  function waitForSocket() {
    if (!BROWSER) return Promise.reject(new Error('Socket is unavailable during SSR'))

    if (socket) return Promise.resolve(socket)

    if (socketError) return Promise.reject(socketError)

    return ensureSocketDeferred().promise
  }

  function waitForAuthenticatedSocket() {
    if (!BROWSER) return Promise.reject(new Error('Authenticated socket is unavailable during SSR'))

    if (!userId) {
      return Promise.reject(
        new Error('Authenticated socket is unavailable without a logged in user'),
      )
    }

    if (socket && currentUserJti && initStatus === 'ready') return Promise.resolve(socket)

    if (initStatus === 'error')
      return Promise.reject(initError ?? new Error('Failed to initialize authenticated socket'))

    if (socketError) return Promise.reject(socketError)

    if (!authTask) return Promise.reject(new Error('Authenticated websocket token is unavailable'))

    return ensureAuthSocketDeferred().promise
  }

  return createSocketApi({
    waitForSocket,
    waitForAuthenticatedSocket,
  })
})
