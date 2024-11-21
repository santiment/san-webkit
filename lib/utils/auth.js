import { parse } from './url.js';
export function getOAuthLink(provider, origin, redirectPath) {
    const base = `${process.env.BACKEND_URL}/auth/${provider}`;
        
    const redirectUrl = new URL(redirectPath || '/', origin);
    redirectUrl.searchParams.append('auth', provider);
    const failedRedirectUrl = new URL(redirectUrl);
    failedRedirectUrl.searchParams.append('failed', '1');
    return (base +
        `?success_redirect_url=${encodeURIComponent(redirectUrl.href)}&fail_redirect_url=${encodeURIComponent(failedRedirectUrl.href)}`);
}
export function parseAuthSearchParams() {
    const params = parse(window.location.search);
    if (params.failed)
        params.failed = true;
    return params;
}
//# sourceMappingURL=auth.js.map