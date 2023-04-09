import { query } from '@/api'

const PROJECT_FRAGMENT = 'slug name ticker logoUrl'

type Project = {
  slug: string
  name: string
  ticker: string
  logoUrl?: string // TODO: Ask backend to rename logos to slug (without chain slug) [@vanguard | 03 Apr, 2023]
}

type Query = SAN.API.Query<'projects', Project[]>

const accessor = ({ projects }: Query) => projects

export const queryProjects = () =>
  query<Query>(`{projects:allProjects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor)

export const queryErc20Projects = () =>
  query(`{projects:allErc20Projects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor)

export const queryWatchlistProjects = (slug: string) =>
  query<
    SAN.API.Query<'watchlist', { listItems: { project: Project }[] }>
  >(`{watchlist:watchlistBySlug(slug:"${slug}") {
    listItems{project {${PROJECT_FRAGMENT}}}
  }}`)
    .then(({ watchlist }) => watchlist.listItems.map(({ project }) => project))
    .catch(() => [] as Project[])

export const queryStablecoinProjects = () => queryWatchlistProjects('stablecoins')
export const queryDeFiProjects = () => queryWatchlistProjects('defi')

export const FIAT_MARKET_ASSETS = [
  { slug: 's-and-p-500', name: 'S&P500', ticker: 'SPX' },
  { slug: 'gold', name: 'Gold', ticker: 'Gold' },
  { slug: 'crude-oil', name: 'Crude Oil', ticker: 'CrudeOil' },
  { slug: 'dxy', name: 'USDX Index', ticker: 'DXY' },
]

export const queryFiatAssets = () => Promise.resolve(FIAT_MARKET_ASSETS)
