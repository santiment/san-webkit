import { type TNominal } from '../../utils/types/index.js'
import { ApiQuery } from '../../api/index.js'

export type TAssetSlug = TNominal<string, 'TAssetSlug'>
export type TAsset = {
  slug: TAssetSlug
  name: string
  ticker: string
  rank: null | number
  priceUsd: null | number
  infrastructure: null | string
}

export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
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
