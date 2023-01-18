export declare const mutateEmailLogin: (email: string, consent?: string, subscribeToWeeklyNewsletter?: boolean) => Promise<SAN.API.QueryBase>;
declare type EthLoginMutation = SAN.API.Query<'ethLogin', any>;
export declare const ethLoginMutation: (USER_DATA_FRAGMENT: string) => Promise<EthLoginMutation>;
export declare function mutateWalletConnectLogin(USER_DATA_FRAGMENT: any, connector: any, address: any): Promise<SAN.API.QueryBase>;
export {};