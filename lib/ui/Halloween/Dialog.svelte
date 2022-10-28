<script context="module">import { dialogs } from './../../ui/Dialog';
import HalloweenPopup from './Dialog.svelte';
export const showHalloweenPopup = () => dialogs.show(HalloweenPopup);</script>

<script>import Svg from './../../ui/Svg/svelte';
import Dialog from './../../ui/Dialog';
import { halloweenData$ } from './../../stores/halloween';
import FlamePumpkin from './FlamePumpkin.svelte';
import DiscountCode from './DiscountCode.svelte';
import Clue from './Clue.svelte';
let closeDialog;
let title = 'Enjoy your 27% off discount!';
let description = "Click on three pumpkins scattered around Santiment's platform, and you'll receive a code for 27% off a membership. Find an additional special discount offer to up this to the maximum 54% off!";
let buttonText = 'Let’s go!';
let padding = 18;

$: pages = $halloweenData$;

$: pages, setContent();

$: hasDiscount = pages.size === 3;

function setContent() {
  if (pages.size === 0) return;

  if (pages.size === 3) {
    title = 'Congratulations';
    description = 'on collecting all three pumpkins! This promo code is available between now and November 5th!';
    buttonText = 'Use Promocode';
    padding = 22;
    return;
  }

  const [collectedAmount, remainingAmount] = pages.size === 1 ? ['One', 'Two'] : ['Two', 'One'];
  title = `${collectedAmount} Down, ${remainingAmount} to Go!`;
  description = `Great job! You have collected ${collectedAmount.toLowerCase()} pumpkin${pages.size > 1 ? 's' : ''}, and there are ${remainingAmount.toLowerCase()} left. Collect three and receive your 27% off discount off all Santiment products!`;
  buttonText = 'Continue!';
  padding = 30;
}</script>

<Dialog {...$$props} noTitle bind:closeDialog class="dialog-3C2MNE">
  <button class="btn close" on:click={closeDialog}>
    <Svg id="close" w="16" />
  </button>
  {#if hasDiscount}
    <img
      src="{process.env.MEDIA_PATH}/illus/halloween/halloween-discount-27.svg"
      alt="Discount"
      class="discount"
    />
  {:else}
    <FlamePumpkin class="flame-pumpkin-3q-Knr" />
  {/if}
  <div class="column hv-center txt-center">
    <h4 class="h4 txt-m mrg-s mrg--b">{title}</h4>
    <p class="description body-2 c-waterloo" style="padding: 0 {padding}px">
      {description}
    </p>
    {#if hasDiscount}
      <DiscountCode class="copy-1I-oh2" discount="SANHALLOWEEN2022" />
      <a
        href="https://app.santiment.net/pricing"
        class="btn-1 btn--orange body-2"
        on:click={window.__onLinkClick}
      >
        {buttonText}
      </a>
      <Clue />
    {:else}
      <button class="btn-1 btn--orange body-2" on:click={closeDialog}>
        {buttonText}
      </button>
    {/if}
  </div>
</Dialog>

<style >:global(.dialog-3C2MNE) {
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

:global(.flame-pumpkin-3q-Knr) {
  position: absolute;
  top: -28px;
  left: calc(50% - 58px);
}

.description {
  margin-bottom: 20px;
}

.btn-1 {
  width: fit-content;
  padding: 8px 28px;
}

:global(.copy-1I-oh2) {
  padding: 8px 69px;
  margin: -8px 0 24px;
}</style>
