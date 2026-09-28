import { ApiMutation } from '../../../api/index.js';
export const mutateAddUserEthAddress = ApiMutation((variables) => ({
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
export const mutateEthLogin = ApiMutation((variables) => ({
    schema: `mutation($signature: String!, $address: String!, $messageHash: String!) {
    ethLogin(signature: $signature, address: $address, messageHash: $messageHash) {
      user {
        id
        firstLogin
      }
    }
  }`,
    variables,
}), (gql) => gql.ethLogin.user);
