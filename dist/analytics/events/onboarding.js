import { trackEvent } from './index.js';
export const trackGdprAccept = (accepted) => trackEvent('gdpr_accept', {
    accepted,
});
