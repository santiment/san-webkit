import {} from '../../utils/types/index.js';
import { ApiQuery } from '../../api/index.js';
export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      rank`;
const assetAccessor = (gql) => gql.projects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));
export const queryAllProjects = ApiQuery(() => `{
    projects:allProjects{ ${PROJECT_FRAGMENT} }
  }`, assetAccessor, { cacheTime: undefined });
export const queryErc20Projects = ApiQuery(() => `{
    projects:allErc20Projects{ ${PROJECT_FRAGMENT} }
  }`, assetAccessor, { cacheTime: undefined });
const getQueryWatchlistProjects = (slug) => ApiQuery(() => `{
    watchlist:watchlistBySlug(slug:"${slug}") {
      listItems{project {${PROJECT_FRAGMENT}}}
    }
}`, (gql) => gql.watchlist?.listItems
    .map(({ project }) => project)
    .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999)) ?? [], { cacheTime: undefined });
export const queryStablecoinProjects = getQueryWatchlistProjects('stablecoins');
export const queryDeFiProjects = getQueryWatchlistProjects('defi');
