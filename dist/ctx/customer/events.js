const EVENT = 'sentry:user';
export function dispatchSentryUserEvent({ id, username }) {
    window.dispatchEvent(new CustomEvent(EVENT, {
        detail: { id, username: username || '' },
    }));
}
export function subscribeToSentryUserEvent(clb) {
    // @ts-ignore
    window.addEventListener(EVENT, clb);
}
