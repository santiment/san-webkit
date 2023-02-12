export declare function getNftContract(): Promise<{
    clientAddress: string | null;
    contract: import("ethers").Contract;
}>;
