<script>
  import { IsMobile } from '@/stores/responsive'
  import sanTokenBanner from './sanTokenBanner.svg'

  let className = ''
  export { className as class }
</script>

<section class="{$IsMobile ? 'column' : 'row'} v-center justify border body-2 {className}">
  <div class="left">
    <h3 class="h3 mrg--b mrg-l">Hold SAN, Pay Less</h3>
    {#if $IsMobile}
      <div class="row h-center mrg--b mrg-l">
        <img src={sanTokenBanner} class="center" alt="San Token Banner" />
      </div>
    {/if}
    <p class="mrg--b mrg-xl">
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
  {#if !$IsMobile}
    <img src={sanTokenBanner} alt="San Token Banner" />
  {/if}
</section>

<style>
  section {
    max-width: 100%;
    width: 800px;
    background: var(--whale);
    border-radius: 8px;
    padding: 32px 48px;
    margin: 0 auto 80px;
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
