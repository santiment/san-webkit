<script>
  import sanTokenBanner from './sanTokenBanner.svg'

  let className = ''
  export { className as class }
</script>

<section class="row justify v-center border body-2 {className}">
  <div class="text">
    <h3 class="h3 txt-m mrg-l mrg--b">Hold SAN, Pay Less</h3>
    <p class="mrg-xl mrg--b">
      Enjoy a 20% discount on all Santiment products, and you can burn or provide SAN liquidity for
      full PRO access.
      <a
        href="https://academy.santiment.net/san-tokens/san-tokens-holding-benefits"
        class="learn row btn-0"
        rel="noopener noreferrer"
        target="_blank">Learn more here!</a
      >
    </p>
    <a
      href="https://kyberswap.com/swap/ethereum/eth-to-san"
      target="_blank"
      rel="noopener noreferrer"
      class="buy btn-1">Buy SAN token</a
    >
  </div>

  <img src={sanTokenBanner} alt="San Token Banner" />
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

  .text {
    max-width: 100%;
    width: 424px;
  }

  p {
    color: var(--fiord);
  }

  .buy {
    display: inline-block;
    padding: 8px 20px;
  }

  :global(.phone-xs),
  :global(.phone) {
    section {
      flex-direction: column-reverse;
      padding: 32px 24px;
      max-width: calc(100% - 40px);
      gap: 35px;
      text-align: center;
    }

    .learn {
      display: inline;
    }

    p {
      margin: 0 0 32px;
    }
  }
</style>
