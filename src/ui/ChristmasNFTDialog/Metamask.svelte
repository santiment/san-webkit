<script lang="ts">
  import type { CurrentUser } from './types'
  import type { NftData } from './api'

  import { notifications$ } from '@/ui/Notifications'
  import { connectWallet } from '@/utils/web3'
  import { getNftContract } from './web3'
  import { queryNftToClaim } from './api'

  export let currentUser: CurrentUser

  let hasClaimableNfts = false
  let nftsToClaim = [] as NftData

  queryNftToClaim().then((data) => {
    nftsToClaim = data
    hasClaimableNfts = data.some(({ nonValidTokenIds }) => Boolean(nonValidTokenIds.length))
  })

  function onConnectClick() {
    connectWallet().catch((e) => {
      notifications$.show({
        type: 'error',
        title: 'Something went wrong',
        description: 'Please try again',
      })
      console.error(e)
    })
  }

  async function onClaimClick() {
    const { clientAddress, contract, error } = await getNftContract().catch((error) => ({
      error,
    }))

    if (error) return console.error(error)

    nftsToClaim.forEach(({ address, nonValidTokenIds }) => {
      if (address.toLowerCase() !== clientAddress.toLowerCase()) return

      nonValidTokenIds.forEach((tokenId) => {
        contract
          .activateSubscription(tokenId)
          .then(() => {
            notifications$.show({ type: 'success', title: 'NFT claimed!' })
          })
          .catch(() => {
            notifications$.show({ type: 'error', title: `Failed to claim NFT (id: ${tokenId})` })
          })
      })
    })
  }
</script>

<div class="border row v-center justify">
  <div>
    <h3>Metamask</h3>
    <p class="mrg-xs mrg--t c-waterloo">
      You will get the ability to deposit tokens to your Sanbase account.

      {#if currentUser.ethAccounts.length}
        <br />
        Connected address: <strong class="txt-b">{currentUser.ethAccounts}</strong>

        {#if hasClaimableNfts}
          <button class="btn-1 mrg-s mrg--t" on:click={onClaimClick}>Claim NFT</button>
        {/if}
      {:else}
        Please follow futher instructions
      {/if}
    </p>
  </div>

  {#if currentUser.ethAccounts.length === 0}
    <button class="btn-1" on:click={onConnectClick}>Connect</button>
  {/if}
</div>

<style>
  .border {
    padding: 16px 24px;
  }

  p {
    margin-right: 80px;
  }
</style>
