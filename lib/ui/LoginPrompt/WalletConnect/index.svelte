<script context="module">
  import { Preloader } from './../../../utils/fn'

  const preload = () =>
    Promise.all([import('@walletconnect/client'), import('@walletconnect/qrcode-modal')])
  const preloadHook = Preloader(preload)
</script>

<script>
  import wcSvg from './wallet-connect.svg'
  import { LoginType, trackLoginStart } from './../../../analytics/events/general'

  let className = 'mrg-s mrg--b'
  export { className as class }
  export let onLogin

  function onClick() {
    trackLoginStart(LoginType.WALLET)

    preload().then(([{ default: WalletConnect }, { default: QRCodeModal }]) => {
      const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org', // Required
        qrcodeModal: QRCodeModal,
      })

      if (!connector.connected) {
        connector.createSession()
      }

      connector.on('connect', (error, payload) => {
        if (error) throw error

        const { accounts } = payload.params[0]
        onLogin(connector, accounts[0])
      })
    })
  }
</script>

<button use:preloadHook class="btn-2 btn--l row hv-center fluid {className}" on:click={onClick}>
  <img src={wcSvg} alt="" class="mrg-s mrg--r" />
  Sign in with WalletConnect
</button>

<style>
  img {
    width: 25px;
  }
</style>
