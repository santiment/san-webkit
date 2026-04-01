import { Query } from '$lib/api/executor.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { createCtx } from '$lib/utils/index.js'

import { queryCurrentJti } from './api.js'
import { createSocketApi } from './service.js'
import { Socket } from './ws.js'

const KEY = 'useWebsocketApiCtx'

type TSocketInitStatus = 'loading' | 'ready' | 'error'

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

  $effect(() => {
    const nextSocket = new Socket(currentUserJti ? { jti: currentUserJti } : {})

    socket = nextSocket
    socketReadyResolve?.(nextSocket)
    socketReadyResolve = null

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

        console.error('Failed to initialize websocket auth', err)
      })
  })

  function waitForSocket() {
    if (socket) return Promise.resolve(socket)

    return socketReadyPromise
  }

  async function waitForAuthenticatedSocket() {
    while (true) {
      if (!userId) {
        throw new Error('Authenticated socket is unavailable without a logged in user')
      }

      if (socket && currentUserJti && initStatus === 'ready') {
        return socket
      }

      if (initStatus === 'error') {
        throw initError ?? new Error('Failed to initialize authenticated socket')
      }

      if (!authTask) {
        throw new Error('Authenticated websocket token is unavailable')
      }

      await authTask
    }
  }

  return createSocketApi({
    waitForSocket,
    waitForAuthenticatedSocket,
  })
})
