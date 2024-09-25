import { type Handle } from '@sveltejs/kit'

export const COOKIE_POLICY_ACCEPTED = 'COOKIE_POLICY_ACCEPTED'

export const cookiePolicyHandle: Handle = async ({ event, resolve }) => {
  event.locals.isCookiesVisible = !event.cookies.get(COOKIE_POLICY_ACCEPTED)

  return resolve(event)
}
