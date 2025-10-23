export const PROJECT_ID = '61efcea38c6e25725936f4f4217cf46b';
let _config = null;
let _appKit = null;
let _wagmiAdapter = null;
async function _getConfig() {
    const [{ mainnet }, { WagmiAdapter }] = await Promise.all([
        import('@reown/appkit/networks'),
        import('@reown/appkit-adapter-wagmi'),
    ]);
    _wagmiAdapter = new WagmiAdapter({
        projectId: PROJECT_ID,
        networks: [mainnet],
    });
    return _wagmiAdapter.wagmiConfig;
}
export const getConfig = async () => _config || (_config = _getConfig());
export const getWagmiAdapter = () => getConfig().then(() => _wagmiAdapter);
async function _getAppKit() {
    const [{ createAppKit }, wagmiAdapter] = await Promise.all([
        import('@reown/appkit'),
        getWagmiAdapter(),
    ]);
    if (!wagmiAdapter)
        return null;
    return createAppKit({
        projectId: PROJECT_ID,
        networks: wagmiAdapter.caipNetworks,
        adapters: [wagmiAdapter],
        metadata: {
            name: 'Sanbase',
            description: 'Sanbase',
            url: 'https://app.santiment.net',
            icons: [],
        },
        features: {
            email: false,
            socials: [],
        },
    });
}
export const getAppKit = async () => _appKit || (_appKit = _getAppKit());
