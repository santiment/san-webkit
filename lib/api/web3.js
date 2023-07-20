import { mutate } from './index';
export const ADD_USER_ETH_ADDRESS_MUTATION = `
  mutation addUserEthAddress($address: String!, $signature: String!, $messageHash: String!) {
    addUserEthAddress(address: $address, signature: $signature, messageHash: $messageHash) {
      ethAccounts {
        address
      }
    }
  }
`;
export function mutateAddUserEthAddress(address, signature, messageHash) {
    return mutate(ADD_USER_ETH_ADDRESS_MUTATION, {
        variables: {
            address,
            signature,
            messageHash,
        },
    }).then(({ addUserEthAddress }) => addUserEthAddress);
}
//# sourceMappingURL=web3.js.map