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
}

export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      marketSegments
      rank`

const assetAccessor = (gql: { projects: TAsset[] }) =>
  gql.projects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999))

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
    BTC: { slug: 'bitcoin', name: 'Bitcoin' },
    ETH: { slug: 'ethereum', name: 'Ethereum' },
    BEP20: { slug: 'binance-coin', name: 'BNB Chain' },
    XRP: { slug: 'xrp', name: 'XRPL' },
    Cardano: { slug: 'cardano', name: 'Cardano' },
    //DOGE: { slug: 'dogecoin', name: 'Dogecoin' },
    Polygon: { slug: 'matic-network', name: 'Polygon' },
    Avalanche: { slug: 'avalanche', name: 'Avalanche' },
    Arbitrum: { slug: 'arbitrum', name: 'Arbitrum' },
    LTC: { slug: 'litecoin', name: 'Litecoin' },
    BCH: { slug: 'bitcoin-cash', name: 'Bitcoin Cash' },
    Optimism: { slug: 'optimism-ethereum', name: 'Optimism' },
    ICP: { slug: 'internet-computer', name: 'ICP' },
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
