export type TProviders = 'google' | 'twitter'

export function getOAuthLink(provider: TProviders, origin: string, redirectPath?: string) {
  const base = `${process.env.BACKEND_URL}/auth/${provider}`

  const redirectUrl = new URL(redirectPath || '/', origin)
  redirectUrl.searchParams.append('auth', provider)

  const failedRedirectUrl = new URL(redirectUrl)
  failedRedirectUrl.searchParams.append('failed', '1')

  return (
    base +
    `?success_redirect_url=${encodeURIComponent(
      redirectUrl.href,
    )}&fail_redirect_url=${encodeURIComponent(failedRedirectUrl.href)}`
  )
}
