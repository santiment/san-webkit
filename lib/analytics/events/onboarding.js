import { TrackCategory } from './utils';
const track = TrackCategory('Onboarding');
export const trackSignupStart = (type) => track('signup_start', {
    type,
});
export const trackSignupFinish = () => track('signup_finish');
export const trackGdprAccept = (accepted) => track('gdpr_accept', { accepted });
//# sourceMappingURL=onboarding.js.map