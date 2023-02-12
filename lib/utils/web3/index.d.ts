export declare function getWeb3Provider(): Promise<any>;
export declare function signMessage(message: any): Promise<{
    signature: any;
    messageHash: string;
}>;
export declare function getAccount(): Promise<[string | null, undefined | Error]>;
export declare function connectWallet(msgPrefix?: string): Promise<{
    ethAccounts: {
        address: string[];
    };
}>;
