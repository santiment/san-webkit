import { BROWSER } from 'esm-env'
import {
  init,
  setTags,
  setUser,
  handleErrorWithSentry as _handleErrorWithSentry,
} from '@sentry/sveltekit'
import type { HandleServerError } from '@sveltejs/kit'

init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.VERSION,
  tracesSampleRate: 0,
})

setTags({
  is_server: !BROWSER,
  backend: process.env.BACKEND_URL,
  is_stage: process.env.IS_STAGE_BACKEND,
  git_commit: process.env.GIT_HEAD,
})

export { sentryHandle } from '@sentry/sveltekit'

export const handleErrorWithSentry = BROWSER
  ? _handleErrorWithSentry
  : (handler?: Parameters<typeof _handleErrorWithSentry>[0]) => {
      const handleError = _handleErrorWithSentry(handler)

      return (async (input) => {
        let ip_address = null as null | string

        try {
          ip_address = input.event.getClientAddress()
        } catch (e) {
          console.error(e)
        }
        if (ip_address) setUser({ ip_address })

        return handleError(input)
      }) as HandleServerError
    }
