import { BROWSER } from 'esm-env';
import { Query } from '../../api/executor.js';
import { useCustomerCtx } from '../customer/index.svelte.js';
import { controlledPromisePolyfill, createCtx } from '../../utils/index.js';
import { queryCurrentJti } from './api.js';
import { createSocketApi } from './service.js';
import { Socket } from './ws.js';
const KEY = 'useWebsocketApiCtx';
export const useWebsocketApiCtx = createCtx(KEY, () => {
    const { currentUser } = useCustomerCtx();
    let socket = $state();
    let currentUserJti = $state(null);
    let initStatus = $state('loading');
    let initError = $state(null);
    let socketError = $state(null);
    const userId = $derived(currentUser.$$?.id);
    let authRequestId = 0;
    let authTask = null;
    let socketDeferred = null;
    let authSocketDeferred = null;
    function ensureSocketDeferred() {
        return (socketDeferred ??= controlledPromisePolyfill());
    }
    function ensureAuthSocketDeferred() {
        return (authSocketDeferred ??= controlledPromisePolyfill());
    }
    function resolveSocket(value) {
        socketDeferred?.resolve(value);
        socketDeferred = null;
    }
    function rejectSocket(error) {
        socketDeferred?.reject(error);
        socketDeferred = null;
    }
    function resolveAuthSocket(value) {
        authSocketDeferred?.resolve(value);
        authSocketDeferred = null;
    }
    function rejectAuthSocket(error) {
        authSocketDeferred?.reject(error);
        authSocketDeferred = null;
    }
    $effect(() => {
        const nextJti = currentUserJti;
        const isAuthReady = !!nextJti && initStatus === 'ready';
        let isCancelled = false;
        let nextSocket;
        socket = undefined;
        socketError = null;
        import('phoenix')
            .then((phoenixLib) => {
            if (isCancelled)
                return;
            nextSocket = new Socket(phoenixLib, nextJti ? { jti: nextJti } : {});
            if (isCancelled) {
                nextSocket.disconnect();
                return;
            }
            socket = nextSocket;
            resolveSocket(nextSocket);
            if (isAuthReady) {
                resolveAuthSocket(nextSocket);
            }
        })
            .catch((err) => {
            if (isCancelled)
                return;
            socket = undefined;
            socketError = err instanceof Error ? err : new Error('Failed to initialize websocket');
            rejectSocket(socketError);
            rejectAuthSocket(socketError);
            console.error('Failed to initialize websocket', err);
        });
        return () => {
            isCancelled = true;
            if (socket === nextSocket) {
                socket = undefined;
            }
            nextSocket?.disconnect();
        };
    });
    $effect(() => {
        const nextUserId = userId;
        const requestId = ++authRequestId;
        initError = null;
        if (!nextUserId) {
            currentUserJti = null;
            initStatus = 'ready';
            authTask = null;
            rejectAuthSocket(new Error('Authenticated socket is unavailable without a logged in user'));
            return;
        }
        currentUserJti = null;
        initStatus = 'loading';
        authTask = queryCurrentJti(Query)()
            .then((jti) => {
            if (requestId !== authRequestId)
                return;
            currentUserJti = jti;
            initStatus = 'ready';
        })
            .catch((err) => {
            if (requestId !== authRequestId)
                return;
            currentUserJti = null;
            initError = err instanceof Error ? err : new Error('Failed to load websocket auth token');
            initStatus = 'error';
            rejectAuthSocket(initError);
            console.error('Failed to initialize websocket auth', err);
        });
    });
    function waitForSocket() {
        if (!BROWSER)
            return Promise.reject(new Error('Socket is unavailable during SSR'));
        if (socket)
            return Promise.resolve(socket);
        if (socketError)
            return Promise.reject(socketError);
        return ensureSocketDeferred().promise;
    }
    function waitForAuthenticatedSocket() {
        if (!BROWSER)
            return Promise.reject(new Error('Authenticated socket is unavailable during SSR'));
        if (!userId) {
            return Promise.reject(new Error('Authenticated socket is unavailable without a logged in user'));
        }
        if (socket && currentUserJti && initStatus === 'ready')
            return Promise.resolve(socket);
        if (initStatus === 'error')
            return Promise.reject(initError ?? new Error('Failed to initialize authenticated socket'));
        if (socketError)
            return Promise.reject(socketError);
        if (!authTask)
            return Promise.reject(new Error('Authenticated websocket token is unavailable'));
        return ensureAuthSocketDeferred().promise;
    }
    return {
        ...createSocketApi({
            waitForSocket,
            waitForAuthenticatedSocket,
        }),
        leaveChannel: (topic) => socket?.leave(topic),
    };
});
