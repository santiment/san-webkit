import type { GetAccountReturnType, WatchAccountParameters } from '@wagmi/core';
import type { EventsControllerState } from '@reown/appkit';
import { Observable } from 'rxjs';
export declare function signMessage(message: string): Promise<{
    messageHash: `0x${string}`;
    signature: `0x${string}`;
}>;
export declare function getAccount(): Promise<GetAccountReturnType<import("@wagmi/core").Config, import("viem").Chain>>;
export declare function connectAccounts(): Promise<import("@wagmi/core").ConnectReturnType<import("@wagmi/core").Config>>;
export declare function disconnectAccount(): Promise<void>;
export declare function watchAccount(onChange: WatchAccountParameters<any>['onChange']): Promise<import("@wagmi/core").WatchAccountReturnType>;
export declare function watchAccount$(): Observable<GetAccountReturnType<any>>;
export declare function appKitEvents$(): Observable<EventsControllerState>;
