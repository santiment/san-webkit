import { init, setTags } from '@sentry/sveltekit';
import { BROWSER } from 'esm-env';
init({
    dsn: process.env.SENTRY_DSN,
    release: process.env.VERSION,
});
setTags({
    is_server: !BROWSER,
    backend: process.env.BACKEND_URL,
    is_stage: process.env.IS_STAGE_BACKEND,
    git_commit: process.env.GIT_HEAD,
});
export { sentryHandle, handleErrorWithSentry } from '@sentry/sveltekit';
