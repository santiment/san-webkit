import { type TChannelTopic } from './ws.js';
export declare const useWebsocketApiCtx: (() => {
    leaveChannel: (topic: TChannelTopic) => void | undefined;
    searchUserByUsername(username: string): Promise<{
        users: {
            avatarUrl: string | null;
            username: string;
            id: number;
        }[];
        leave: () => void;
    }>;
    subscribeToNotifications(userId: string, onNotification: (notificationId: number) => void): () => void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        leaveChannel: (topic: TChannelTopic) => void | undefined;
        searchUserByUsername(username: string): Promise<{
            users: {
                avatarUrl: string | null;
                username: string;
                id: number;
            }[];
            leave: () => void;
        }>;
        subscribeToNotifications(userId: string, onNotification: (notificationId: number) => void): () => void;
    };
    __CTX: "useWebsocketApiCtx";
};
