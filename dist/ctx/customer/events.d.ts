import type { TCurrentUser } from './api.js';
type TUserData = {
    id: number | string;
    username: string;
};
export declare function dispatchSentryUserEvent({ id, username }: TCurrentUser): void;
export declare function subscribeToSentryUserEvent(clb: (event: CustomEvent<TUserData>) => void): void;
export {};
