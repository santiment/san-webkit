import { BROWSER } from 'esm-env'

export function getDeviceId(): string | undefined {
  if (!BROWSER) return

  const cookies = document.cookie.split('; ')

  // NOTE: Searching for intercom's cookie with generated device id [@vanguard | 26 Jan, 2023]
  const cookie = cookies.find((cookie) => cookie.includes('device-id'))

  if (!cookie) return

  return cookie.split('=')[1]
}
