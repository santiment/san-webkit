import { ApiMutation } from '$lib/api/index.js'

export const mutateAddUserEthAddress = ApiMutation(
  (variables: { address: string; signature: string; messageHash: string }) => ({
    schema: `
  mutation ($address: String!, $signature: String!, $messageHash: String!) {
    addUserEthAddress(address: $address, signature: $signature, messageHash: $messageHash) {
      ethAccounts {
        address
      }
    }
  }
`,
    variables,
  }),
  (gql: { addUserEthAddress: { ethAccounts: { address: string }[] } }) => gql.addUserEthAddress,
)

export const mutateEthLogin = ApiMutation(
  (variables: { signature: string; address: string; messageHash: string; nonce: string }) => ({
    schema: `mutation($signature: String!, $address: String!, $messageHash: String!, $nonce: String) {
    ethLogin(signature: $signature, address: $address, messageHash: $messageHash, nonce: $nonce) {
      user {
        id
        firstLogin
      }
    }
  }`,
    variables,
  }),
  (gql: { ethLogin: { user: { id: string; firstLogin: boolean } } }) => gql.ethLogin.user,
)

export const mutateEthLoginChallenge = ApiMutation(
  (variables: { address: string }) => ({
    schema: `mutation($address: String!) {
    ethLoginChallenge { nonce message }
  `,
    variables,
  }),

  (gql: { ethLoginChallenge: { nonce: string; message: string } }) => gql.ethLoginChallenge,
)
