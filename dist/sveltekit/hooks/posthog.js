import { error, json, text } from '@sveltejs/kit';
import { POSTHOG_URL, PROXY_ROUTE } from '../../analytics/posthog/index.js';
import { logger } from '../../logger/index.js';
/** Request headers PostHog needs. Everything else (cookie, authorization, origin, referer, ...) is dropped. */
const FORWARDED_HEADERS = [
    'content-type',
    'accept',
    'accept-language',
    'user-agent',
    'x-forwarded-for',
];
const ensureSlash = (route) => (route[0] === '/' ? route : `/${route}`);
function forwardHeaders(headers) {
    const forwarded = new Headers();
    for (const header of FORWARDED_HEADERS) {
        const value = headers.get(header);
        if (value)
            forwarded.set(header, value);
    }
    return forwarded;
}
export const posthogTrackHandle = async ({ event, resolve }) => {
    if (!event.url.pathname.startsWith(PROXY_ROUTE)) {
        return resolve(event);
    }
    const route = event.url.pathname.replace(PROXY_ROUTE, '');
    const targetUrl = `${POSTHOG_URL}${ensureSlash(route)}${event.url.search}`;
    const { method, headers } = event.request;
    let duplex = undefined;
    if (method === 'POST') {
        duplex = 'half';
        headers.delete('content-length');
    }
    try {
        const response = await fetch(targetUrl, {
            // @ts-expect-error duplex is not present in default Node.js types
            duplex,
            method,
            headers: forwardHeaders(headers),
            body: event.request.body,
        });
        if (response.status === 204) {
            return new Response(undefined, { status: 204 });
        }
        const isJson = (response.headers.get('content-type') ?? '').includes('application/json');
        const data = await (isJson ? response.json() : response.text());
        return (isJson ? json : text)(data, { status: response.status });
    }
    catch (e) {
        logger.info(e);
        return error(500, 'Internal server error');
    }
};
