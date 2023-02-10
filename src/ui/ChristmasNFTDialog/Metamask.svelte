<script lang="ts">
  import type { CurrentUser } from './types'

  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import { notifications$ } from '@/ui/Notifications'
  import { connectWallet } from '@/utils/web3'
  import { getNftContract } from './web3'
  import { queryNftToClaim } from './api'

  export let currentUser: CurrentUser

  let selectedTokenId: number
  let claimableTokenIds = [] as number[]
  let isOpened = false

  queryNftToClaim().then((data) => {
    claimableTokenIds = data.flatMap(({ nonValidTokenIds }) => nonValidTokenIds)
    selectedTokenId = claimableTokenIds[0]
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

  function selectTokenId(id: number) {
    selectedTokenId = id
    isOpened = false
  }

  async function onClaimClick() {
    const { contract, error } = await getNftContract().catch((error) => ({
      error,
    }))

    if (error) return console.error(error)

    contract
      .activateSubscription(selectedTokenId)
      .then(() => {
        notifications$.show({ type: 'success', title: 'Subscription activated' })

        claimableTokenIds = claimableTokenIds.filter((tokenId) => tokenId !== selectedTokenId)
        selectedTokenId = claimableTokenIds[0]
      })
      .catch(() => {
        notifications$.show({
          type: 'error',
          title: `Failed to activate subscription (id: ${tokenId})`,
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
        Connected address: <strong class="txt-b">{currentUser.ethAccounts.toString()}</strong>

        {#if claimableTokenIds.length}
          <div class="row v-center mrg-s mrg--t relative">
            Token ID:

            <Tooltip on="click" position="top" bind:isOpened>
              <button slot="trigger" class="btn-2 btn--s row v-center mrg-s mrg--l mrg--r">
                {selectedTokenId}
                <Svg id="arrow-down" w="8" h="5" class="mrg-s mrg--l" />
              </button>

              <div slot="tooltip" class="tooltip column">
                {#each claimableTokenIds as tokenId}
                  <button
                    class="btn-ghost"
                    class:active={tokenId === selectedTokenId}
                    on:click={() => selectTokenId(tokenId)}>{tokenId}</button
                  >
                {/each}
              </div>
            </Tooltip>
            –
            <button class="btn-1 mrg-s mrg--l" on:click={onClaimClick}>
              Activate subscription
            </button>
          </div>
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

  .tooltip {
    padding: 8px;
  }
</style>
