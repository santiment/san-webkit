import type { AppKit } from '@reown/appkit'
import type { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { Config } from '@wagmi/core'

export const PROJECT_ID = '61efcea38c6e25725936f4f4217cf46b'

let _config = null as null | ReturnType<typeof _getConfig>
let _appKit = null as null | Promise<AppKit | null>
let _wagmiAdapter = null as null | WagmiAdapter

async function _getConfig(): Promise<Config> {
  const [{ mainnet }, { WagmiAdapter }] = await Promise.all([
    import('@reown/appkit/networks'),
    import('@reown/appkit-adapter-wagmi'),
  ])

  _wagmiAdapter = new WagmiAdapter({
    projectId: PROJECT_ID,
    networks: [mainnet],
  })

  return _wagmiAdapter.wagmiConfig!
}

export const getConfig = async () => _config || (_config = _getConfig())

export const getWagmiAdapter = () => getConfig().then(() => _wagmiAdapter)

async function _getAppKit() {
  const [{ createAppKit }, wagmiAdapter] = await Promise.all([
    import('@reown/appkit'),
    getWagmiAdapter(),
  ])

  if (!wagmiAdapter) return null

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
  })
}

export const getAppKit = async () => _appKit || (_appKit = _getAppKit())
