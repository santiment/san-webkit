import { type Handle } from '@sveltejs/kit'

export const APP_VERSION_COOKIE = `_SB_AV`
export enum AppVersion {
  LITE = 'LITE',
  CLASSIC = 'CLASSIC',
}

export const sanbaseVersionHandle: Handle = async ({ event, resolve }) => {
  const currentUser = event.locals.customer?.currentUser

  let appVersionCookie = event.cookies.get(APP_VERSION_COOKIE)

  if (currentUser) {
    const savedVersion =
      currentUser.settings.sanbaseVersion === AppVersion.LITE ? AppVersion.LITE : AppVersion.CLASSIC

    appVersionCookie = appVersionCookie || savedVersion || AppVersion.LITE
  } else {
    appVersionCookie = appVersionCookie || AppVersion.LITE
  }

  event.cookies.set(APP_VERSION_COOKIE, appVersionCookie as AppVersion, {
    path: '/',
    maxAge: 31536000,
    httpOnly: false,
  })

  event.locals.isLiteVersion = appVersionCookie === AppVersion.LITE

  return resolve(event)
}
