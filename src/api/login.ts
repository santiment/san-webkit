import { mutate } from '@/api'
import { signMessage } from '@/utils/web3'

const EMAIL_LOGIN_MUTATION = (
  email: string,
  consent: string,
  subscribeToWeeklyNewsletter: boolean,
) => `
  mutation {
    emailLogin(
      email:"${email}",
      consent:"${consent}",
      subscribeToWeeklyNewsletter:${subscribeToWeeklyNewsletter}
    ) {
      success
    }
  }
`

export const mutateEmailLogin = (
  email: string,
  consent = '',
  subscribeToWeeklyNewsletter = false,
) => mutate(EMAIL_LOGIN_MUTATION(email, consent, subscribeToWeeklyNewsletter))

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

const EthMutation = (MUTATION: typeof ETH_LOGIN_MUTATION) => async (USER_DATA_FRAGMENT: string) => {
  if (!window.ethereum) return Promise.reject('No metamask found')

  const accounts = await window.ethereum.enable()
  if (!accounts) return Promise.reject()

  const address = accounts[0]
  const { signature, messageHash } = await signMessage(`Login in Santiment with address ${address}`)

  return mutate(MUTATION(USER_DATA_FRAGMENT, signature, address, messageHash))
}

export const ethLoginMutation = EthMutation(ETH_LOGIN_MUTATION)
