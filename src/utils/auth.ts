import { parse } from './url'

export type Providers = 'google' | 'twitter'

export function getOAuthLink(provider: Providers) {
  const base = `${process.env.BACKEND_URL}/auth/${provider}`
  const origin = process.browser ? window.location.origin : ''
  const redirectBase = encodeURIComponent(origin + `/?auth=${provider}`)

  return (
    base +
    `?success_redirect_url=${redirectBase}&fail_redirect_url=${
      redirectBase + encodeURIComponent('&failed=1')
    }`
  )
}

export type SearchParams = {
  auth: Providers
  failed?: boolean
}

export function parseAuthSearchParams() {
  const params = parse(window.location.search) as SearchParams

  if (params.failed) params.failed = true

  return params
}
