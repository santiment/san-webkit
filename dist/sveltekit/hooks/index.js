import { error, redirect } from '@sveltejs/kit';
import UAParser from 'ua-parser-js';
import { loadCustomerData } from '../../ctx/customer/api.js';
import { normalizeDeviceType, getDeviceInfo } from '../../ctx/device/index.js';
import { logger } from '../../logger/index.js';
export const checkIsSanbaseCookiePresent = (event) => event.cookies.get('_sanbase_sid') || event.cookies.get('_sanbase_stage_sid');
export const appSessionHandle = async ({ event, resolve }) => {
    let customer = {};
    // NOTE: Only making a currentUser request if the sanbase cookie is present
    if (checkIsSanbaseCookiePresent(event)) {
        // @ts-expect-error
        await loadCustomerData(event.fetch, (data) => Object.assign(customer, data)).catch(() => {
            console.log('loadCustomerData error');
            customer = undefined;
        });
    }
    const theme = customer?.currentUser?.settings.theme === 'nightmode' ? 'night-mode' : '';
    const userAgent = UAParser(event.request.headers.get('user-agent'));
    const device = normalizeDeviceType(userAgent.device.type);
    event.locals.device = getDeviceInfo(device);
    event.locals.customer = customer;
    event.locals.theme = theme;
    let response;
    try {
        response = await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%body-class%', `${device} ${theme}`),
        });
    }
    catch (e) {
        logger.info(e, event.url.pathname);
        return error(500, 'Internal server error');
    }
    Object.entries({
        'Content-Security-Policy': "frame-ancestors 'self'",
        'X-Frame-Options': 'sameorigin',
    }).forEach(([header, value]) => response.headers.set(header, value));
    return response;
};
export const normalizePathHandle = async ({ event, resolve }) => {
    const { pathname } = event.url;
    logger.info('normalizePathHandle: ' + pathname);
    if (pathname.endsWith('//')) {
        return redirect(308, pathname.replace(/\/+$/, '/') + event.url.search);
    }
    return resolve(event);
};
export { amplitudeTrackHandle } from './amplitude.js';
export { sanbaseVersionHandle } from './sanbase.js';
export { cookiePolicyHandle } from './cookie.js';
export { posthogTrackHandle } from './posthog.js';
