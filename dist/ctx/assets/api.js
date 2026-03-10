import { ApiQuery } from '../../api/index.js';
import { keyify } from '../../utils/object.js';
export const PROJECT_FRAGMENT = `slug
      ticker
      name
      priceUsd
      infrastructure
      marketSegments
      rank`;
function assetAccessor(gql) {
    const assets = gql.projects.sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));
    for (let i = 0; i < assets.length; i++) {
        const asset = assets[i];
        if (asset.infrastructure) {
            const chain = Blockchain[asset.infrastructure];
            if (chain && chain.slug !== asset.slug)
                asset.chain = chain;
        }
    }
    return assets;
}
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
// NOTE: Sorting by marketcap - swissborg.com/crypto-market/categories/blockchain
export const Blockchain = keyify({
    BTC: { slug: 'bitcoin', name: 'Bitcoin', ticker: 'BTC' },
    ETH: { slug: 'ethereum', name: 'Ethereum', ticker: 'ETH' },
    XRP: { slug: 'xrp', name: 'XRPL', ticker: 'XRP' },
    BEP20: { slug: 'binance-coin', name: 'BNB Chain', ticker: 'BSC' }, // BSC = BNB Smart Chain
    Solana: { slug: 'solana', name: 'Solana', ticker: 'SOL' },
    Cardano: { slug: 'cardano', name: 'Cardano', ticker: 'ADA' },
    BCH: { slug: 'bitcoin-cash', name: 'Bitcoin Cash', ticker: 'BCH' },
    Avalanche: { slug: 'avalanche', name: 'Avalanche', ticker: 'AVAX' },
    ICP: { slug: 'internet-computer', name: 'ICP', ticker: 'ICP' },
    Polygon: { slug: 'matic-network', name: 'Polygon', ticker: 'POL' },
    //DOGE: { slug: 'dogecoin', name: 'Dogecoin', ticker: 'DOGE' },
    Arbitrum: { slug: 'arbitrum', name: 'Arbitrum', ticker: 'ARB' },
    Optimism: { slug: 'optimism-ethereum', name: 'Optimism', ticker: 'OP' },
    LTC: { slug: 'litecoin', name: 'Litecoin', ticker: 'LTC' },
}, 'infrastructure');
export const checkIsErc20Asset = (asset) => asset.marketSegments?.includes('Ethereum') ?? false;
export const checkIsStablecoinAsset = (asset) => asset.marketSegments?.includes('Stablecoin') ?? false;
export const checkIsDeFiAsset = (asset) => asset.marketSegments?.includes('DeFi') ?? false;
export const checkIsAssetOnBlockchain = (asset, blockchainInfrastructure) => asset.infrastructure === blockchainInfrastructure;
const TradFinanceItem = (slug, name, ticker) => ({
    slug: slug,
    name,
    ticker,
    priceUsd: null,
    rank: null,
    infrastructure: null,
    // @ts-ignore
    group: undefined,
});
export const FIATS = [
    TradFinanceItem('s-and-p-500', 'S&P 500', 'SPX'),
    TradFinanceItem('gold', 'Gold', 'Gold'),
    TradFinanceItem('silver', 'Silver', 'Silver'),
    TradFinanceItem('crude-oil', 'Crude Oil', 'CrudeOil'),
];
export const INDICES_AND_SUPPLY = [
    TradFinanceItem('dxy', 'USDX Index', 'DXY'),
    TradFinanceItem('m2-money', 'M2 Money', 'M2M'),
];
export const FUNDS = [
    TradFinanceItem('gbtc', 'GBTC', 'GBTC'),
    TradFinanceItem('ibit', 'IBIT', 'IBIT'),
    TradFinanceItem('fbtc', 'FBTC', 'FBTC'),
    TradFinanceItem('arkb', 'ARKB', 'ARKB'),
    TradFinanceItem('btco', 'BTCO', 'BTCO'),
    TradFinanceItem('bitb', 'BITB', 'BITB'),
];
