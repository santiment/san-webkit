import { Socket } from './ws.js';
type TCreateSocketApiParams = {
    waitForSocket: () => Promise<Socket>;
    waitForAuthenticatedSocket: () => Promise<Socket>;
};
export declare const createSocketApi: ({ waitForSocket, waitForAuthenticatedSocket, }: TCreateSocketApiParams) => {
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
export {};
