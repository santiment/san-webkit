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
    get: (allCtxs?: Map<string, any>) => {
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
