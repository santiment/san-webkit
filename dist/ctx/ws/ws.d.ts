export type SocketParams = {
    jti?: string;
};
export type TChannelTopic = 'users:common' | `notifications:${string}`;
export declare class Socket {
    #private;
    constructor(phoenixLib: typeof import('phoenix'), params?: SocketParams);
    query(topic: TChannelTopic, event: string, payload: object): Promise<{
        result: unknown;
        leave: () => void;
    }>;
    subscribe(topic: TChannelTopic, event: string, clb: (response?: unknown) => void): () => void;
    disconnect(): void;
    leave(topic: TChannelTopic): void;
}
