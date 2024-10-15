<script lang="ts">
  import type { AppKit } from '@reown/appkit'
  import type { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
  import type { GetAccountReturnType } from 'wagmi/actions'

  import { onMount } from 'svelte'
  import { watchAccount } from '@wagmi/core'
  import { loginWithWallet, getAppKit } from '$lib/flow/web3/wallet-connect/appKit.js'
  import Button from '$ui/core/Button/Button.svelte'

  let appKit = $state<AppKit | null>(null)

  const wagmiAdapter = $derived(appKit?.adapter as WagmiAdapter | undefined)
  const wagmiConfig = $derived(wagmiAdapter?.wagmiConfig)

  $effect(() => {
    if (!wagmiConfig) return

    const unwatch = watchAccount(wagmiConfig, { onChange: onAccountChange })
    return () => unwatch()
  })

  async function onAccountChange(account: GetAccountReturnType) {
    const { address, isConnected } = account
    if (!isConnected || !address) return

    loginWithWallet(address)
  }

  async function handleClick() {
    appKit?.open()
  }

  onMount(() => {
    getAppKit().then((_appKit) => {
      appKit = _appKit
    })
  })
</script>

<Button variant="fill" onclick={handleClick} disabled={!appKit}>Connect wallet</Button>
