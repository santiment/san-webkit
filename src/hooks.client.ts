import { handleErrorWithSentry } from '@sentry/sveltekit'
import * as Sentry from '@sentry/sveltekit'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.GIT_HEAD,
})

Sentry.setTags({
  is_client: true,
  git_commit: process.env.GIT_HEAD,
})

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry()