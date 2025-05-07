import { ApiQuery } from '$lib/api/index.js'

export type Watchlist = {
  id: string | number
  title: string
  description: string | null
  isScreener: boolean
}

export const queryUserWatchlists = ApiQuery(
  () => `{
  currentUser {
    watchlists {
      id
      title:name
      description
      isScreener
    }
  }
}`,
  (gql: { currentUser: { watchlists: Watchlist[] } }) => gql.currentUser.watchlists,
)
