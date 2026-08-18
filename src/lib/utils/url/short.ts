import { ApiMutation } from '$lib/api/index.js'

export const mutateCreateShortUrl = ApiMutation(
  (fullUrl) => ({
    schema: `mutation createShortUrl($fullUrl: String!) {
    createShortUrl(fullUrl:$fullUrl) {
      shortUrl
    }
  }`,
    variables: { fullUrl },
  }),
  (gql: { createShortUrl: { shortUrl: string } }) => gql.createShortUrl.shortUrl,
)
