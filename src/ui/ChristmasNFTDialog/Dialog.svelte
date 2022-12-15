<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import ChristmasNFTDialog from './Dialog.svelte'

  export const showChristmasNFTDialog = (props) =>
    dialogs.showOnce(ChristmasNFTDialog, Object.assign({ strict: true }, props))
</script>

<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Dialog from '@/ui/Dialog'
</script>

<Dialog {...$$props} noTitle class="body-2">
  <h2 class="h3 txt-m txt-center mrg-xl mrg--b">San NFT Christmas Game!</h2>
  <p class="txt-center mrg-xxl mrg--b">
    We are hosting a Christmas event to reward the best Sanbase crypto analysts in our community!
    Participate in our Insight writing competition, and get 1 of 10 NFT’s that unlock three months
    of Sanbase PRO access alongside a lifetime 18% discount.
  </p>

  <button class="btn-1 btn--l">Start the Game</button>
</Dialog>

<style lang="scss">
  p {
    max-width: 490px;
  }

  button {
    margin: 0 auto;
    padding: 8px 44px;
  }
</style>
