import { Mutation } from '../../api/index.js';
export const mutateAddUserEthAddress = Mutation((variables) => ({
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
}), (gql) => gql.addUserEthAddress);
