import { query } from '@/api'

const PROJECT_FRAGMENT = 'slug name ticker'

type Project = {
  slug: string
  name: string
  ticker: string
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
