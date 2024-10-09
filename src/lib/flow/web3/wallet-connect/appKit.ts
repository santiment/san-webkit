import type { AppKit } from '@reown/appkit'
import type { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { Config } from '@wagmi/core'

import { UniQuery } from '$lib/api/executor.js'
import { mutateEthLogin } from './api.js'

const projectId = '61efcea38c6e25725936f4f4217cf46b'

let _appKit: AppKit | null = null

export async function getAppKit() {
  if (_appKit) return _appKit

  const [{ createAppKit }, { mainnet }, { WagmiAdapter }] = await Promise.all([
    import('@reown/appkit'),
    import('@reown/appkit/networks'),
    import('@reown/appkit-adapter-wagmi'),
  ])

  const networks = [mainnet]

  const wagmiAdapter = new WagmiAdapter({
    projectId,
    networks,
  })

  _appKit = createAppKit({
    projectId,
    networks,
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

  return _appKit
}

export async function signMessage(config: Config, message: string) {
  const [{ hashMessage }, { signMessage: wagmiSignMessage }] = await Promise.all([
    import('viem'),
    import('@wagmi/core'),
  ])

  const messageHash = hashMessage(message)
  const signature = await wagmiSignMessage(config, { message })

  return { messageHash, signature }
}

export async function loginWithWallet(address: string) {
  const appKit = await getAppKit()
  const { wagmiConfig } = (appKit.adapter as WagmiAdapter | undefined) ?? {}
  if (!wagmiConfig) return

  const { messageHash, signature } = await signMessage(
    wagmiConfig,
    `Login in Santiment with address ${address}`,
  )

  await mutateEthLogin(UniQuery(fetch))({ signature, messageHash, address })
}
