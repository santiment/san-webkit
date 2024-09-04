import { mutate } from '@/api'
import { notifications$ } from '@/ui/Notifications'

const mutateObtainSanrNftSubscription = () =>
  mutate(`mutation { obtainSanrNftSubscription {
  status
}}`)

export enum NftErrors {
  NoAddress = 'The user does not have any blockchain addresses connected',
  ActiveSubscription = 'The user already has an active Sanbase subscription',
  NoNft = 'The user is not eligible for the SanR NFT subscription. None of user addresses has a valid SanR NFT token.',
}

function showErrorNotification(message: string) {
  switch (message) {
    case NftErrors.ActiveSubscription:
      return notifications$.show({
        type: 'warning',
        title: 'You already have a Sanbase subscription!',
        description: `To activate your SanR NFT subscription, you will need to <br/><a href="/account#subscription" data-source="sanr_nft_notifications" data-type="cancel_current_subscription">cancel your existing Sanbase Pro subscription first</a>.`,
        dismissAfter: 60000,
      })

    case NftErrors.NoAddress:
      return notifications$.show({
        type: 'warning',
        title: 'No connected wallet found',
        description: `<a href="/account#connections" data-source="sanr_nft_notifications" data-type="connect_metamask">Connect Metamask</a> to check NFT availability`,
        dismissAfter: 60000,
      })

    case NftErrors.NoNft:
      return notifications$.show({
        type: 'error',
        title: 'No NFT to activate',
        description: `There is no SanR NFT in your connected wallet. Please check <br/>that you have connected the same wallet as the one on the <br/>SanR side. If you need any help, please <button class="c-accent" onclick="Intercom('show')">contact us</button>!`,
        dismissAfter: 60000,
      })

    default:
      return notifications$.show({
        type: 'error',
        title: 'Unexpected error',
        dismissAfter: 60000,
      })
  }
}

export async function startCheckNftAccessFlow(customer$: SAN.CustomerStore) {
  return mutateObtainSanrNftSubscription()
    .then(() => {
      setTimeout(() => customer$.refetch(), 500)

      return notifications$.show({
        type: 'success',
        title: 'Congratulation!',
        description: `Your Sanbase access starts now. To learn more about Sanbase Pro subscription, <a href="https://academy.santiment.net/products-and-plans/sanbase-subscription-via-sanr-nft/" target="_blank">follow the link to Academy</a>`,
        dismissAfter: 60000,
      })
    })
    .catch((e: Error) => {
      const error: Error = e[0] || e

      showErrorNotification(error.message)
      return Promise.reject(error)
    })
}
