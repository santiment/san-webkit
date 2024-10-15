import { BROWSER } from 'esm-env';
import { init, setTags, setUser, setExtra, handleErrorWithSentry as _handleErrorWithSentry, } from '@sentry/sveltekit';
init({
    dsn: process.env.SENTRY_DSN,
    release: process.env.VERSION,
    tracesSampleRate: 0,
});
setTags({
    is_server: !BROWSER,
    backend: process.env.BACKEND_URL,
    is_stage: process.env.IS_STAGE_BACKEND,
    git_commit: process.env.GIT_HEAD,
});
export const handleErrorWithSentry = (handler) => {
    const handleError = _handleErrorWithSentry(handler);
    return async (input) => {
        setExtra('event', normalizeEventError(input.event || {}));
        if (!BROWSER) {
            let ip_address = null;
            try {
                ip_address = input.event.getClientAddress();
            }
            catch (e) {
                console.error(e);
            }
            if (ip_address)
                setUser({ ip_address });
        }
        return handleError(input);
    };
};
function normalizeEventError({ url, route, isDataRequest, locals }) {
    return { url, route, isDataRequest, ...locals };
}
