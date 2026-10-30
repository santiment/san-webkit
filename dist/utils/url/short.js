import { ApiMutation } from '../../api/index.js';
export const mutateCreateShortUrl = ApiMutation((fullUrl) => ({
    schema: `mutation createShortUrl($fullUrl: String!) {
    createShortUrl(fullUrl:$fullUrl) {
      shortUrl
    }
  }`,
    variables: { fullUrl },
}), (gql) => gql.createShortUrl.shortUrl);
