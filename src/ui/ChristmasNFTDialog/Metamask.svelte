<script lang="ts">
  import type { CurrentUser } from './types'

  export let currentUser: CurrentUser
</script>

<div class="border row v-center justify">
  <div>
    <h3>Metamask</h3>
    <p class="mrg-xs mrg--t c-waterloo">
      You will get the ability to deposit tokens to your Sanbase account.

      {#if currentUser.ethAccounts.length}
        <br />
        Connected address: <strong class="txt-b">{currentUser.ethAccounts}</strong>
      {:else}
        Please follow futher instructions
      {/if}
    </p>
  </div>

  {#if currentUser.ethAccounts.length === 0}
    <button class="btn-1">Connect</button>
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
