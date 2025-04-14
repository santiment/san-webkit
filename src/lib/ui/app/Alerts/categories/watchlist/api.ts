import { ApiQuery } from '$lib/api/index.js'

export const queryWatchlistName = ApiQuery(
  (id: number) => ({
    schema: `query ($id: ID!) {
  watchlist(id: $id) {
    name
  }
}`,
    variables: { id },
  }),
  (gql: { watchlist: { name: string } | null }) => gql.watchlist?.name,
)
