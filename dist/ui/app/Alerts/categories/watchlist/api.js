import { ApiQuery } from '../../../../../api/index.js';
export const queryWatchlistName = ApiQuery((id) => ({
    schema: `query ($id: ID!) {
  watchlist(id: $id) {
    name
  }
}`,
    variables: { id },
}), (gql) => gql.watchlist?.name);
