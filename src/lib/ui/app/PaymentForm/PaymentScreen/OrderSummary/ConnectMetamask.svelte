<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { useConnectMetamaskFlow } from '$lib/flow/web3/wallet.js'
  import { trackEvent } from '$lib/analytics/index.js'

  const { onConnectMetamaskClick } = useConnectMetamaskFlow()

  function onClick() {
    onConnectMetamaskClick()
    trackEvent('press', {
      action: 'connect_wallet',
      type: 'pay_crypto_connect_metamask',
      source: 'payment_dialog',
    })
  }
</script>

<Button variant="fill" size="lg" class="center" onclick={onClick}>
  <img src="/webkit/icons/metamask.svg" alt="MetaMask" class="h-4" />
  Connect MetaMask
</Button>
