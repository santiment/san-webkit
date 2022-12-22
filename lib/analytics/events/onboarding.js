import { saveLoginMethod, TrackCategory } from './utils';
const track = TrackCategory('Onboarding');
export function trackSignupStart(method) {
    saveLoginMethod(method);
    return track('signup_start', {
        method,
        source_url: window.location.href,
    });
}
export const trackSignupFinish = (method) => track('signup_finish', { method });
export const trackGdprAccept = (accepted) => track('gdpr_accept', { accepted, source_url: window.location.href });
//# sourceMappingURL=onboarding.js.map