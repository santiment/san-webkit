import { ApiQuery } from '../../../../../api/index.js';
export const queryUserWatchlists = ApiQuery(() => `{
  currentUser {
    watchlists {
      id
      title:name
      description
      isScreener
    }
  }
}`, (gql) => gql.currentUser.watchlists);
