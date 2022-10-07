<script>
  import sanTokenBanner from './sanTokenBanner.svg'
  let className = ''
  export { className as class }
</script>

<section class="santokenbanner row v-center justify {className}">
  <div class="left">
    <h3 class="h3 mrg--b mrg-l">Hold SAN, Pay Less</h3>
    <p class="body-2 mrg--b mrg-xl">
      Enjoy a 20% discount on all Santiment products, and you can burn or provide SAN liquidity for
      full PRO access.
      <a
        href="https://academy.santiment.net/san-tokens/san-tokens-holding-benefits"
        class="btn-0 block"
        rel="noopener noreferrer"
        target="_blank">Learn more here!</a
      >
    </p>
    <a
      href="https://academy.santiment.net/san-tokens/how-to-buy-san/"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-1 body-2">Buy SAN token</a
    >
  </div>
  <img src={sanTokenBanner} alt="San Token Banner" />
</section>

<style lang="scss">
  :global(#plans) {
    --plans-margin-bottom: 24px;
  }

  .santokenbanner {
    max-width: 800px;
    background: var(--whale);
    border: 1px solid var(--porcelain);
    border-radius: 8px;
    padding: 32px 48px;
    margin-bottom: 80px;
    margin: 0 auto 80px;
  }

  .left {
    width: 424px;

    p {
      color: var(--fiord);
    }

    a.btn-1 {
      padding: 8px 20px;
    }

    .block {
      display: block;
    }
  }
</style>
