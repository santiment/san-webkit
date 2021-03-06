import { query } from '@/api'

const WATCHLISTS_QUERY = (userId: number | string) => `{
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
}`

type Query = SAN.API.Query<
  'getUser',
  {
    watchlists: {
      id: number
      title: string
      changes: { marketcap: number }[]
    }[]
  }
>

const accessor = ({ getUser }) => getUser.watchlists
export const queryUserWatchlists = (userId: number | string) =>
  query<Query>(WATCHLISTS_QUERY(userId)).then(accessor) as Promise<Query>

// ----------------

const ADDRESS_WATCHLISTS_QUERY = (userId: number | string) => `{
  getUser(selector:{id:${userId}}) {
    watchlists(type:BLOCKCHAIN_ADDRESS) {
      id
      title:name
      stats {
        blockchainAddressesCount
			}
    }
  }
}`

type AddressQuery = SAN.API.Query<
  'getUser',
  {
    watchlists: {
      id: number
      title: string
      stats: {
        blockchainAddressesCount: number
      }
    }[]
  }
>

export const queryUserAddressWatchlists = (userId: number | string) =>
  query<AddressQuery>(ADDRESS_WATCHLISTS_QUERY(userId)).then(accessor) as Promise<AddressQuery>
