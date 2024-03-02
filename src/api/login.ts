import { mutate } from '@/api'
import { signMessage } from '@/utils/web3'

const EMAIL_LOGIN_MUTATION = (
  email: string,
  consent: string,
  subscribeToWeeklyNewsletter: boolean,
) => `
  mutation($successRedirectUrl:String) {
    emailLogin(
      email:"${email}",
      consent:"${consent}",
      subscribeToWeeklyNewsletter:${subscribeToWeeklyNewsletter}
      successRedirectUrl:$successRedirectUrl
    ) {
      success
    }
  }
`

export const mutateEmailLogin = (
  email: string,
  consent = '',
  subscribeToWeeklyNewsletter = false,
  successRedirectUrl?: string,
) =>
  mutate(EMAIL_LOGIN_MUTATION(email, consent, subscribeToWeeklyNewsletter), {
    variables: { successRedirectUrl },
  })

// ---------------

const ETH_LOGIN_MUTATION = (
  USER_DATA_FRAGMENT: string,
  signature: string,
  address: string,
  messageHash: string,
) => `
  mutation {
    ethLogin(
      signature: "${signature}"
      address: "${address}"
      messageHash: "${messageHash}"
    ) {
      user {
${USER_DATA_FRAGMENT}
      }
    }
  }
`

type EthLoginMutation = SAN.API.Query<'ethLogin', any>
const getMessage = (address: string) => `Login in Santiment with address ${address}`

const EthMutation = (MUTATION: typeof ETH_LOGIN_MUTATION) => async (USER_DATA_FRAGMENT: string) => {
  if (!window.ethereum) return Promise.reject('No metamask found')

  const accounts = await window.ethereum.enable()
  if (!accounts) return Promise.reject()

  const address = accounts[0]
  const { signature, messageHash } = await signMessage(getMessage(address))

  return mutate<EthLoginMutation>(MUTATION(USER_DATA_FRAGMENT, signature, address, messageHash))
}

export const ethLoginMutation = EthMutation(ETH_LOGIN_MUTATION)

export async function mutateWalletConnectLogin(USER_DATA_FRAGMENT, connector, address) {
  const { ethers } = await import('ethers')

  const messageHash = ethers.utils.hashMessage(getMessage(address))
  const signature = await connector.signMessage([
    '0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3', // Required
    messageHash,
  ])

  return mutate(ETH_LOGIN_MUTATION(USER_DATA_FRAGMENT, signature, address, messageHash))
}
