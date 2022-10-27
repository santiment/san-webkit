<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import HalloweenPopup from './HalloweenPopup.svelte'

  export const showHalloweenPopup = () => dialogs.show(HalloweenPopup)
</script>

<script lang="ts">
  import Svg from '@/ui/Svg'
  import Dialog from '@/ui/Dialog'
  import { halloweenData$ } from '@/stores/halloween'
  import { copy } from '@/utils'

  const DISCOUNT = 'SANHALLOWEEN2022'

  let closeDialog
  let title = ''
  let description = ''
  let buttonText = ''
  let padding = ''
  let copyLabel = 'Copy discount'
  let hasDiscount
  let isClueShown = false

  $: ({ count } = $halloweenData$)
  $: count, setContent()
  $: hasDiscount = count === 3

  function setContent() {
    switch (count) {
      case 1: {
        title = 'One Down, Two to Go!'
        description =
          'Great job! You have collected one pumpkin, and there are two left. Collect three and receive your 27% off discount off all Santiment products!'
        buttonText = 'Continue!'
        padding = '0 30px'
        break
      }
      case 2: {
        title = 'Two Down, One to Go!'
        description =
          'Great job! You have collected two pumpkin, and there are one left. Collect three and receive your 27% off discount off all Santiment products!'
        buttonText = 'Continue!'
        padding = '0 30px'
        break
      }
      case 3: {
        title = 'Congratulations'
        description =
          'on collecting all three pumpkins! This promo code is available between now and November 5th!'
        buttonText = 'Use Promocode'
        padding = '0 22px'
        break
      }
      default: {
        title = 'Enjoy your 27% off discount!'
        description =
          "Click on three pumpkins scattered around Santiment's platform, and you'll receive a code for 27% off a membership. Find an additional special discount offer to up this to the maximum 54% off!"
        buttonText = 'Let’s go!'
        padding = '0 18px'
        break
      }
    }
  }

  function onCopy(e) {
    e.preventDefault()
    copyLabel = 'Copied!'
    copy(DISCOUNT, () => (copyLabel = 'Copy discount'), 1500)
  }
</script>

<Dialog {...$$props} noTitle bind:closeDialog class="$style.dialog">
  <button class="btn close" on:click={closeDialog}>
    <Svg id="close" w="16" h="16" />
  </button>
  {#if !hasDiscount}
    <div class="flame-pumpkin row hv-center relative">
      <span class="pumpkin">🎃</span>
      <img src="{process.env.MEDIA_PATH}/illus/halloween/flame.svg" alt="Flame" class="flame" />
    </div>
  {:else}
    <img
      src="{process.env.MEDIA_PATH}/illus/halloween/halloween-discount-27.svg"
      alt="Discount"
      class="discount"
    />
  {/if}
  <div class="column hv-center txt-center">
    <h4 class="h4 txt-m mrg-s mrg--b">{title}</h4>
    <p class="description body-2 c-waterloo" style="padding: {padding}">
      {description}
    </p>
    {#if hasDiscount}
      <button class="btn copy expl-tooltip" aria-label={copyLabel} on:click={onCopy}>
        {DISCOUNT}
      </button>
      <a
        href="https://app.santiment.net/pricing"
        class="btn-1 btn--orange body-2"
        on:click={window.__onLinkClick}
      >
        {buttonText}
      </a>
      <button class="btn c-waterloo keep mrg-m mrg--t" on:click={() => (isClueShown = true)}>
        Keep hunting to double down and get 54% discount
      </button>
    {:else}
      <button class="btn-1 btn--orange body-2" on:click={closeDialog}>
        {buttonText}
      </button>
    {/if}
    {#if isClueShown}
      <div class="divider fluid mrg-xxl mrg--t mrg--b" />
      <div class="clue-wrapper">
        <p class="mrg-l mrg--b">
          We’ve hidden one more treasure somewhere on the Sanbase. Get through the riddle and find a
          Special offer if you want to double your discount!
        </p>
        <div class="clue">
          <p class="txt-m">Here is the clue:</p>
          <p>Try seeking information about SAN token to find an extra discount option</p>
        </div>
      </div>
    {/if}
  </div>
</Dialog>

<style>
  .dialog {
    width: 480px;
    padding: 113px 40px 32px;
  }

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .discount {
    position: absolute;
    top: 32px;
    left: calc(50% - 82px);
    width: 200px;
    height: 62px;
  }

  .flame-pumpkin {
    position: absolute;
    top: -28px;
    left: calc(50% - 58px);
  }

  .flame {
    width: 116px;
    height: 133px;
  }

  .pumpkin {
    z-index: 2;
    position: absolute;
    bottom: 20px;
    font-size: 48px;
  }

  .description {
    margin-bottom: 20px;
  }

  .btn-1 {
    width: fit-content;
    padding: 8px 28px;
  }

  .copy {
    --bg: var(--athens);
    padding: 8px 69px;
    margin-top: -8px;
    margin-bottom: 24px;
  }

  .keep {
    --color-hover: var(--casper);
    max-width: 228px;
    text-decoration: underline;
  }

  .divider {
    height: 1px;
    background-color: var(--porcelain);
  }

  .clue-wrapper {
    padding: 0 24px;
  }

  .clue {
    border: 1px solid var(--orange);
    border-radius: 6px;
    padding: 12px 44px;
  }
</style>
