import type { TCurrentUser } from './api.js'

const EVENT = 'sentry:user'

type TUserData = { id: number | string; username: string }

export function dispatchSentryUserEvent({ id, username }: TCurrentUser) {
  window.dispatchEvent(
    new CustomEvent<TUserData>(EVENT, {
      detail: { id, username: username || '' },
    }),
  )
}

export function subscribeToSentryUserEvent(clb: (event: CustomEvent<TUserData>) => void) {
  // @ts-ignore
  window.addEventListener(EVENT, clb)
}
