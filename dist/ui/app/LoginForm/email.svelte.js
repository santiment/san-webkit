import { Query } from '../../../api/executor.js';
import { mutateEmailLogin } from '../../../flow/login/index.js';
import { notification } from '../../core/Notifications/index.js';
import { trackAuth } from '../../../analytics/events/auth.js';
export function useEmailLogin({ errorMsg = 'Cannot login. Try again later.', } = {}) {
    let loading = $state(false);
    async function loginEmail({ email, turnstileRef, isSignUp, from, }) {
        const redirectUrl = new URL(from || '/', window.location.origin);
        loading = true;
        const turnstileToken = await turnstileRef.getToken().catch(() => null);
        if (!turnstileToken) {
            notification.error('Invalid turnstile token');
            return false;
        }
        trackAuth('email', isSignUp);
        return mutateEmailLogin(Query)({
            email,
            token: turnstileToken,
            successRedirectUrl: redirectUrl.href,
        })
            .catch((err) => {
            console.error(err);
            notification.error(errorMsg);
            turnstileRef.reset();
            return false;
        })
            .finally(() => (loading = false));
    }
    return {
        loading: {
            get $() {
                return loading;
            },
        },
        loginEmail,
    };
}
