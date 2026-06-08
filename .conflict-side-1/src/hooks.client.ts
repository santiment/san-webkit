import { handleErrorWithSentry } from '@sentry/sveltekit'
import * as Sentry from '@sentry/sveltekit'

import { subscribeToSentryUserEvent } from '$lib/ctx/customer/events.js'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.GIT_HEAD,
})

Sentry.setTags({
  is_client: true,
  git_commit: process.env.GIT_HEAD,
})

subscribeToSentryUserEvent((event) => Sentry.setUser(event.detail))

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry()
