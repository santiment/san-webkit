<script>
  import { IsMobileOnly } from '@/stores/responsive'
  import sanTokenBanner from './sanTokenBanner.svg'

  let className = ''
  export { className as class }
</script>

<section
  class="{$IsMobileOnly
    ? 'mobile column h-center'
    : 'row'} v-center justify border body-2 {className}"
>
  <div class="left">
    {#if $IsMobileOnly}
      <div class="row h-center mrg--b mrg-xxl">
        <img src={sanTokenBanner} class="center" alt="San Token Banner" />
      </div>
    {/if}
    <h3 class="h3 mrg--b mrg-l">Hold SAN, Pay Less</h3>
    <p class="mrg--b {$IsMobileOnly ? 'mrg-xxl' : 'mrg-xl'}">
      Enjoy a 20% discount on all Santiment products, and you can burn or provide SAN liquidity for
      full PRO access.
      <a
        href="https://academy.santiment.net/san-tokens/san-tokens-holding-benefits"
        class="btn-0 row"
        rel="noopener noreferrer"
        target="_blank">Learn more here!</a
      >
    </p>
    <a
      href="https://academy.santiment.net/san-tokens/how-to-buy-san-tokens/"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-1">Buy SAN token</a
    >
  </div>
  {#if !$IsMobileOnly}
    <img src={sanTokenBanner} alt="San Token Banner" />
  {/if}
</section>

<style lang="scss">
  section {
    max-width: 100%;
    width: 800px;
    background: var(--whale);
    border-radius: 8px;
    padding: 32px 48px;
    margin: 0 auto 80px;
  }

  h3 {
    font-weight: 500;
  }

  .mobile {
    padding: 24px 32px;
    max-width: 95% !important;

    .left {
      text-align: center;
    }

    .btn-0 {
      display: inline;
    }
  }

  .left {
    max-width: 100%;
    width: 424px;
  }

  p {
    color: var(--fiord);
  }

  .btn-1 {
    padding: 8px 20px;
  }
</style>
