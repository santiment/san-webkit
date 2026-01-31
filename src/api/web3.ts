import { mutate } from './index'

export const ADD_USER_ETH_ADDRESS_MUTATION = `
  mutation addUserEthAddress($address: String!, $signature: String!, $messageHash: String!) {
    addUserEthAddress(address: $address, signature: $signature, messageHash: $messageHash) {
      ethAccounts {
        address
      }
    }
  }
`

type AddUserEthAddressMutation = SAN.API.Query<
  'addUserEthAddress',
  {
    ethAccounts: {
      address: string
    }[]
  }
>

export function mutateAddUserEthAddress(address: string, signature: string, messageHash: string) {
  return mutate<AddUserEthAddressMutation>(ADD_USER_ETH_ADDRESS_MUTATION, {
    variables: {
      address,
      signature,
      messageHash,
    },
  }).then(({ addUserEthAddress }) => addUserEthAddress)
}
