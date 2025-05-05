import { ApiQuery } from '$lib/api/index.js'

export const queryWatchlistName = ApiQuery(
  (id: number | string) => ({
    schema: `query ($id: ID!) {
  watchlist(id: $id) {
    name
  }
}`,
    variables: { id },
  }),
  (gql: { watchlist: { name: string } | null }) => gql.watchlist?.name,
)

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
