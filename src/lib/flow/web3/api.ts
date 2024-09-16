import { Mutation } from '$lib/api/index.js'

export const mutateAddUserEthAddress = Mutation(
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
