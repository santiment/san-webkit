declare type Query = SAN.API.Query<
  'getUser',
  {
    watchlists: {
      id: number
      title: string
      changes: {
        marketcap: number
      }[]
    }[]
  }
>
export declare const queryUserWatchlists: (userId: number | string) => Promise<Query>
declare type AddressQuery = SAN.API.Query<
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
export declare const queryUserAddressWatchlists: (userId: number | string) => Promise<AddressQuery>
export {}
