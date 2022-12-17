import { query } from './../../api';
const WATCHLISTS_QUERY = (userId) => `{
  getUser(selector:{id:${userId}}) {
    watchlists {
      id
      title:name
      changes:historicalStats(from:"utc_now-7d", to: "utc_now", interval:"6h") {  
        marketcap
      }
      isScreener
    }
  }
}`;
const accessor = ({ getUser }) => getUser.watchlists;
export const queryUserWatchlists = (userId) => query(WATCHLISTS_QUERY(userId)).then(accessor);
// ----------------
const ADDRESS_WATCHLISTS_QUERY = (userId) => `{
  getUser(selector:{id:${userId}}) {
    watchlists(type:BLOCKCHAIN_ADDRESS) {
      id
      title:name
      stats {
        blockchainAddressesCount
			}
    }
  }
}`;
export const queryUserAddressWatchlists = (userId) => query(ADDRESS_WATCHLISTS_QUERY(userId)).then(accessor);
//# sourceMappingURL=watchlists.js.map