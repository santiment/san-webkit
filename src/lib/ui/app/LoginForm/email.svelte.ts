import type Turnstile from './Turnstile.svelte'

import { Query } from '$lib/api/executor.js'
import { mutateEmailLogin } from '$lib/flow/login/index.js'
import { notification } from '$ui/core/Notifications/index.js'
import { trackAuth } from '$lib/analytics/events/auth.js'

type TEmailLoginProps = {
  errorMsg?: string
}

type TEmailSubmitProps = {
  email: string
  from: string | undefined
  turnstileRef: Turnstile
  isSignUp: boolean
}

export function useEmailLogin({
  errorMsg = 'Cannot login. Try again later.',
}: TEmailLoginProps = {}) {
  let loading = $state(false)

  async function loginEmail({
    email,
    turnstileRef,
    isSignUp,
    from,
  }: TEmailSubmitProps): Promise<boolean> {
    const redirectUrl = new URL(from || '/', window.location.origin)

    loading = true

    const turnstileToken = await turnstileRef.getToken().catch(() => null)
    if (!turnstileToken) {
      notification.error('Invalid turnstile token')
      return false
    }

    trackAuth('email', isSignUp)

    return mutateEmailLogin(Query)({
      email,
      token: turnstileToken,
      successRedirectUrl: redirectUrl.href,
    })
      .catch((err) => {
        console.error(err)
        notification.error(errorMsg)
        turnstileRef.reset()
        return false
      })
      .finally(() => (loading = false))
  }

  return {
    loading: {
      get $() {
        return loading
      },
    },

    loginEmail,
  }
}
