<script lang="ts">
  import { onMount } from 'svelte'
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { mutateCreatePumpkinCode } from '@/api/halloween'
  import { copy } from '@/utils'

  let copyLabel = 'Copy discount'
  let discount = 'SANHALLOWEEN2022'

  $: ({ isLoggedIn } = $customerData$)
  $: ({ pages } = $halloweenData$)

  function onCopy(e) {
    e.preventDefault()
    copyLabel = 'Copied!'
    copy(discount, () => (copyLabel = 'Copy discount'), 1500)
  }

  onMount(() => pages.length === 3 && mutateCreatePumpkinCode().then((code) => (discount = code)))
</script>

{#if isLoggedIn && pages.length === 3}
  <div class="wrapper column hv-center txt-center">
    <img
      src="{process.env.MEDIA_PATH}/illus/halloween/halloween-discount-54.svg"
      alt="Discount"
      class="discount"
    />
    <p class="body-1 txt-m mrg-s mrg--b">Congratulations!</p>
    <p class="mrg-m mrg--b">
      Let’s put your outstanding skills to use and seek an alpha! This promo code is available
      between now and November 5th!
    </p>
    <button class="btn fluid copy expl-tooltip" aria-label={copyLabel} on:click={onCopy}>
      {discount}
    </button>
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
    --bg: var(--athens);
    padding: 6px 0;
  }

  .btn-1 {
    padding: 6px 0;
  }
</style>
