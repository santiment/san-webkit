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
  (variables: { signature: string; address: string; messageHash: string }) => ({
    schema: `mutation($signature: String!, $address: String!, $messageHash: String!) {
    ethLogin(signature: $signature, address: $address, messageHash: $messageHash) {
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
