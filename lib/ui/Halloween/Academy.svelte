<script>import { customerData$ } from './../../stores/user';
import { halloweenData$ } from './../../stores/halloween';
import { mutateCreatePumpkinCode } from './../../api/halloween';
import DiscountCode from './DiscountCode.svelte';
let discount;

$: ({
  isLoggedIn
} = $customerData$);

$: pages = $halloweenData$.size;

$: if (pages === 3) {
  mutateCreatePumpkinCode().then(code => discount = code);
}</script>

{#if isLoggedIn && discount}
  <div class="wrapper column hv-center txt-center">
    <img
      src="{process.env.MEDIA_PATH}/illus/halloween/halloween-discount-54.svg"
      alt="Discount"
      class="discount-2SehpF"
    />
    <h3 class="body-1 txt-m mrg-s mrg--b">Congratulations!</h3>
    <p class="mrg-m mrg--b">
      Let’s put your outstanding skills to use and seek an alpha! This promo code is available
      between now and November 5th!
    </p>
    <DiscountCode class="fluid copy-ZOpbRq" {discount} />
    <a
      href="https://app.santiment.net/pricing"
      class="btn-1 btn--orange fluid mrg-l mrg--t"
      on:click={window.__onLinkClick}
    >
      Use Promocode
    </a>
  </div>
{/if}

<style >.wrapper {
  max-width: 188px;
  padding: 24px 16px;
  background-color: var(--orange-pale);
  border-radius: 8px;
}

:global(.discount-2SehpF) {
  width: 134px;
  height: 41px;
  margin-bottom: 16px;
  margin-left: 10px;
}

:global(.copy-ZOpbRq) {
  padding: 6px 0;
}

.btn-1 {
  padding: 6px 0;
}</style>
