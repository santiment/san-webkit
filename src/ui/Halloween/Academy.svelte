<script lang="ts">
  import { onMount } from 'svelte'
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { mutateCreatePumpkinCode } from '@/api/halloween'
  import DiscountCode from './DiscountCode.svelte'

  let discount
  let pagesLength = 0

  $: ({ isLoggedIn } = $customerData$)
  $: pages = $halloweenData$
  $: pagesLength = pages.size

  onMount(() => mutateCreatePumpkinCode().then((code) => (discount = code)))
</script>

{#if isLoggedIn && pagesLength === 3}
  <div class="wrapper column hv-center txt-center">
    <img
      src="{process.env.MEDIA_PATH}/illus/halloween/halloween-discount-54.svg"
      alt="Discount"
      class="$style.discount"
    />
    <h3 class="body-1 txt-m mrg-s mrg--b">Congratulations!</h3>
    <p class="mrg-m mrg--b">
      Let’s put your outstanding skills to use and seek an alpha! This promo code is available
      between now and November 5th!
    </p>
    <DiscountCode class="fluid $style.copy" {discount} />
    <a
      href="https://app.santiment.net/pricing"
      class="btn-1 btn--orange fluid mrg-l mrg--t"
      on:click={window.__onLinkClick}
    >
      Use Promocode
    </a>
  </div>
{/if}

<style lang="scss">
  .wrapper {
    max-width: 188px;
    padding: 24px 16px;
    background-color: var(--orange-pale);
    border-radius: 8px;
  }

  .discount {
    width: 134px;
    height: 41px;
    margin-bottom: 16px;
    margin-left: 10px;
  }

  .copy {
    padding: 6px 0;
  }

  .btn-1 {
    padding: 6px 0;
  }
</style>
