import type { TCustomer } from '../../../ctx/customer/api.js';
export declare const checkIsFollowing: (currentUser: TCustomer["currentUser"], userId: number | string) => boolean | undefined;
export declare function startFollowFlow(currentUser: TCustomer['currentUser'], userId: number | string): Promise<unknown> | undefined;
