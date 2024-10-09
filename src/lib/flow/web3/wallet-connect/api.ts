import { ApiMutation } from '$lib/api/index.js'

export const mutateEthLogin = ApiMutation(
  (variables: { signature: string; address: string; messageHash: string }) => ({
    schema: `mutation($signature: String!, $address: String!, $messageHash: String!) {
    ethLogin(signature: $signature, address: $address, messageHash: $messageHash) {
      user {
        id
      }
    }
  }`,
    variables,
  }),
  (gql: { ethLogin: { user: { id: string } } }) => gql.ethLogin.user,
)
