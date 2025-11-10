export type TProviders = 'google' | 'twitter'

export function getOAuthLink(provider: TProviders, origin: string, redirectPath?: string) {
  const baseUrl = new URL(`/auth/${provider}`, process.env.BACKEND_URL)

  const redirectUrl = new URL('/', 'sanbase://auth')
  redirectUrl.searchParams.append('auth', provider)

  const failedRedirectUrl = new URL(redirectUrl)
  failedRedirectUrl.searchParams.append('failed', '1')

  baseUrl.searchParams.append('success_redirect_url', encodeURIComponent(redirectUrl.href))
  baseUrl.searchParams.append('fail_redirect_url', encodeURIComponent(failedRedirectUrl.href))

  baseUrl.searchParams.append('include_jwt_in_redirect_url', 'true')

  console.log({ baseUrl, baseStr: baseUrl.toString(), redirectUrl, redirectPath })

  return baseUrl.toString()
}
