export declare function getConfig(): Promise<import("@wagmi/core").Config<readonly [import("@wagmi/core/chains").Chain, ...import("@wagmi/core/chains").Chain[]], Record<number, import("@wagmi/core").Transport<string, Record<string, any>, import("viem").EIP1193RequestFn>>> | import("@wagmi/core").Config<readonly [{
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
            readonly blockCreated: 19258213;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
            readonly apiUrl: "https://api-sepolia.etherscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 751532;
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
            readonly blockCreated: 5317080;
        };
    };
    id: 11155111;
    name: "Sepolia";
    nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc2.sepolia.org"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}], {
    1: ({ chain, }: {
        chain?: import("@wagmi/core/chains").Chain | undefined;
        pollingInterval?: import("viem").ClientConfig["pollingInterval"] | undefined;
        retryCount?: import("viem").TransportConfig["retryCount"] | undefined;
        timeout?: import("viem").TransportConfig["timeout"] | undefined;
    }) => {
        config: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn>;
        request: import("viem").EIP1193RequestFn;
        value?: {
            fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
            url?: string | undefined;
        } | undefined;
    };
    11155111: ({ chain, }: {
        chain?: import("@wagmi/core/chains").Chain | undefined;
        pollingInterval?: import("viem").ClientConfig["pollingInterval"] | undefined;
        retryCount?: import("viem").TransportConfig["retryCount"] | undefined;
        timeout?: import("viem").TransportConfig["timeout"] | undefined;
    }) => {
        config: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn>;
        request: import("viem").EIP1193RequestFn;
        value?: {
            fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
            url?: string | undefined;
        } | undefined;
    };
}>>;
