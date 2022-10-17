<script>
  import sanTokenBanner from './sanTokenBanner.svg'

  let className = ''
  export { className as class }
</script>

<section class="justify v-center border body-2 {className}">
  <img src={sanTokenBanner} class="row h-center mrg--b mrg-xxl" alt="San Token Banner" />
  <div class="left">
    <h3 class="h3 txt-m mrg--b mrg-l">Hold SAN, Pay Less</h3>
    <p>
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
  <img src={sanTokenBanner} alt="San Token Banner" />
</section>

<style lang="scss">
  section {
    display: flex;
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
    margin-bottom: 24px;
  }

  .btn-1 {
    padding: 8px 20px;
  }

  img {
    display: block;

    &.row {
      display: none;
    }
  }

  :global(.phone-xs),
  :global(.phone) {
    section {
      flex-direction: column;
      padding: 24px 32px;
      max-width: 95%;
    }

    .left {
      text-align: center;
    }

    .btn-0 {
      display: inline;
    }

    p {
      margin-bottom: 32px;
    }

    img {
      display: none;

      &.row {
        display: block;
      }
    }
  }
</style>
