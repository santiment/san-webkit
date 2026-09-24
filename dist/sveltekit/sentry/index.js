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
export const handleErrorWithSentry = (handleIgnores, sentryHandler) => {
    const handleError = _handleErrorWithSentry(sentryHandler);
    return async (input) => {
        const ignored = handleIgnores?.(input);
        if (ignored)
            return ignored;
        setExtra('event', normalizeEventError(input.event || {}));
        if (!BROWSER) {
            const event = input.event;
            try {
                setUser({ ip_address: event.getClientAddress() });
            }
            catch (e) {
                console.error(e);
            }
            const { currentUser } = event?.locals?.customer || {};
            if (currentUser) {
                const { id, username } = currentUser;
                setUser({ id, username: username || '' });
            }
        }
        return handleError(input);
    };
};
function normalizeEventError({ url, route, isDataRequest, locals }) {
    return { url, route, isDataRequest, ...locals };
}
