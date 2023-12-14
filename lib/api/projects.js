import { query } from './../api/index.js';
const PROJECT_FRAGMENT = 'slug name ticker logoUrl';
const accessor = ({ projects }) => projects;
export const queryProjects = () => query(`{projects:allProjects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor);
export const queryErc20Projects = () => query(`{projects:allErc20Projects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor);
export const queryWatchlistProjects = (slug) => query(`{watchlist:watchlistBySlug(slug:"${slug}") {
    listItems{project {${PROJECT_FRAGMENT}}}
  }}`)
    .then(({ watchlist }) => watchlist.listItems.map(({ project }) => project))
    .catch(() => []);
export const queryStablecoinProjects = () => queryWatchlistProjects('stablecoins');
export const queryDeFiProjects = () => queryWatchlistProjects('defi');
export const FIAT_MARKET_ASSETS = [
    { slug: 's-and-p-500', name: 'S&P500', ticker: 'SPX' },
    { slug: 'gold', name: 'Gold', ticker: 'Gold' },
    { slug: 'crude-oil', name: 'Crude Oil', ticker: 'CrudeOil' },
    { slug: 'dxy', name: 'USDX Index', ticker: 'DXY' },
];
export const queryFiatAssets = () => Promise.resolve(FIAT_MARKET_ASSETS);
//# sourceMappingURL=projects.js.map