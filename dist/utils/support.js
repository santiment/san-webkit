import { trackEvent } from '../analytics/index.js';
export function onSupportClick(e) {
    if (window.Intercom)
        e?.preventDefault();
    window.Intercom?.('show');
    trackEvent('action', {
        type: 'show_intercom',
    });
}
