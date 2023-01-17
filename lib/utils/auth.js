import { parse } from './url';
export function getOAuthLink(provider) {
    const base = `${process.env.BACKEND_URL}/auth/${provider}`;
    const origin = process.browser ? window.location.origin : '';
    const redirectBase = encodeURIComponent(origin + `/?auth=${provider}`);
    return (base +
        `?success_redirect_url=${redirectBase}&fail_redirect_url=${redirectBase + encodeURIComponent('&failed=1')}`);
}
export function parseAuthSearchParams() {
    const params = parse(window.location.search);
    if (params.failed)
        params.failed = true;
    return params;
}
//# sourceMappingURL=auth.js.map