export declare function getWeb3Provider(): Promise<any>;
export declare function signMessage(message: any): Promise<{
    signature: any;
    messageHash: string;
}>;
