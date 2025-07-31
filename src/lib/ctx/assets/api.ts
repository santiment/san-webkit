import type { TNominal } from '../../utils/types/index.js'

import { ApiQuery } from '../../api/index.js'
import { keyify } from '../../utils/object.js'

export type TAssetSlug = TNominal<string, 'TAssetSlug'>
export type TAsset = {
  slug: TAssetSlug
  name: string
  ticker: string
  rank: null | number
  priceUsd: null | number
  infrastructure: null | string
  marketSegments?: string[]
  chain?: (typeof Blockchain)[keyof typeof Blockchain]
}

export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      marketSegments
      rank`

function assetAccessor(gql: { projects: TAsset[] }) {
  const assets = gql.projects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999))

  for (let i = 0; i < assets.length; i++) {
    const asset = assets[i]
    if (asset.infrastructure) {
      const chain = Blockchain[asset.infrastructure as keyof typeof Blockchain]
      if (chain && chain.slug !== asset.slug) asset.chain = chain
    }
  }

  return assets
}

export const queryAllProjects = ApiQuery(
  () => `{
    projects:allProjects{ ${PROJECT_FRAGMENT} }
  }`,
  assetAccessor,
  { cacheTime: undefined },
)

export const queryErc20Projects = ApiQuery(
  () => `{
    projects:allErc20Projects{ ${PROJECT_FRAGMENT} }
  }`,
  assetAccessor,
  { cacheTime: undefined },
)

const getQueryWatchlistProjects = (slug: string) =>
  ApiQuery(
    () => `{
    watchlist:watchlistBySlug(slug:"${slug}") {
      listItems{project {${PROJECT_FRAGMENT}}}
    }
}`,
    (gql: { watchlist: { listItems: { project: TAsset }[] } | null }) =>
      gql.watchlist?.listItems
        .map(({ project }) => project)
        .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999)) ?? [],
    { cacheTime: undefined },
  )

export const queryStablecoinProjects = getQueryWatchlistProjects('stablecoins')
export const queryDeFiProjects = getQueryWatchlistProjects('defi')

export const Blockchain = keyify(
  {
    BTC: { slug: 'bitcoin', name: 'Bitcoin', ticker: 'BTC' },
    ETH: { slug: 'ethereum', name: 'Ethereum', ticker: 'ETH' },
    BEP20: { slug: 'binance-coin', name: 'BNB Chain', ticker: 'BSC' }, // BSC = BNB Smart Chain
    XRP: { slug: 'xrp', name: 'XRPL', ticker: 'XRP' },
    Cardano: { slug: 'cardano', name: 'Cardano', ticker: 'ADA' },
    //DOGE: { slug: 'dogecoin', name: 'Dogecoin', ticker: 'DOGE' },
    Polygon: { slug: 'matic-network', name: 'Polygon', ticker: 'POL' },
    Avalanche: { slug: 'avalanche', name: 'Avalanche', ticker: 'AVAX' },
    Arbitrum: { slug: 'arbitrum', name: 'Arbitrum', ticker: 'ARB' },
    LTC: { slug: 'litecoin', name: 'Litecoin', ticker: 'LTC' },
    BCH: { slug: 'bitcoin-cash', name: 'Bitcoin Cash', ticker: 'BCH' },
    Optimism: { slug: 'optimism-ethereum', name: 'Optimism', ticker: 'OP' },
    ICP: { slug: 'internet-computer', name: 'ICP', ticker: 'ICP' },
    Solana: { slug: 'solana', name: 'Solana', ticker: 'SOL' },
  },
  'infrastructure',
)

export const checkIsErc20Asset = (
  asset: TAsset,
): asset is TAsset & { marketSegments: (string | 'Ethereum')[] } =>
  asset.marketSegments?.includes('Ethereum') ?? false

export const checkIsStablecoinAsset = (
  asset: TAsset,
): asset is TAsset & { marketSegments: (string | 'Stablecoin')[] } =>
  asset.marketSegments?.includes('Stablecoin') ?? false

export const checkIsDeFiAsset = (
  asset: TAsset,
): asset is TAsset & { marketSegments: (string | 'DeFi')[] } =>
  asset.marketSegments?.includes('DeFi') ?? false

export type TBlockchainInfrastructure = keyof typeof Blockchain & (string & {})

export const checkIsAssetOnBlockchain = <GBlockchain extends TBlockchainInfrastructure>(
  asset: TAsset,
  blockchainInfrastructure: GBlockchain,
): asset is TAsset & { infrastructure: GBlockchain } =>
  asset.infrastructure === blockchainInfrastructure
