let _config = null;
export async function getConfig() {
    if (_config)
        return _config;
    const [{ http, createConfig }, { mainnet, sepolia }, { injected }] = await Promise.all([
        import('@wagmi/core'),
        import('@wagmi/core/chains'),
        import('@wagmi/connectors'),
    ]);
    return (_config = createConfig({
        chains: [mainnet, sepolia],
        connectors: [injected()],
        transports: {
            [mainnet.id]: http(),
            [sepolia.id]: http(),
        },
    }));
}
