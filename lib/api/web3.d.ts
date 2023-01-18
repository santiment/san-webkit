export declare const ADD_USER_ETH_ADDRESS_MUTATION = "\n  mutation addUserEthAddress($address: String!, $signature: String!, $messageHash: String!) {\n    addUserEthAddress(address: $address, signature: $signature, messageHash: $messageHash) {\n      ethAccounts {\n        address\n      }\n    }\n  }\n";
export declare function mutateAddUserEthAddress(address: string, signature: string, messageHash: string): Promise<{
    ethAccounts: {
        address: string[];
    };
}>;
