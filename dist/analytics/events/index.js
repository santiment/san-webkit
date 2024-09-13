import { BROWSER } from 'esm-env';
import { track } from './track.js';
export const trackEvent = (event, props) => BROWSER &&
    track.event(event, {
        category: 'General',
        ...props,
        source_url: window.location.origin + window.location.pathname,
        source_url_type: window.getPageType?.(window.location.pathname),
        source_search_params: window.location.search,
    });
