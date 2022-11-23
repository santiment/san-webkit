<script>
  import blackFriday from './blackFriday.png'

  let className = ''
  export { className as class }
</script>

<section class="row justify v-center border body-2 relative {className}">
  <img src={blackFriday} alt="Black Friday Bear" />
  <div class="text">
    <div class="title">Buy this bear market dip</div>
    <div class="value">35% Off</div>
    <div class="condition">for all subscriptions till Nov 30th</div>
    <a class="btn btn-1 body-1 mrg--b mrg-l" href="https://santiment.net/discord"
      >Claim your promo code!</a
    >
    <div class="note">You will find your promo code in our dicord channel</div>
  </div>
</section>

<style lang="scss">
  img {
    position: absolute;
    right: -35px;
    height: 100%;
  }

  .text {
    max-width: 380px;

    .btn {
      display: inline-flex;
      --v-padding: 9.6px;
    }
  }

  section {
    max-width: 100%;
    width: 1140px;
    border: 1px solid #222639;
    border-radius: 8px;
    padding: 40px 0 40px 72px;
    margin: 0 auto 80px;
    overflow: hidden;
    background: #1a1d2f;
  }

  .title {
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #d2d6e7;
  }

  .value {
    font-weight: 600;
    font-size: 68px;
    line-height: 83px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
  }

  .condition {
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 28px;
  }

  .note {
    font-style: italic;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #f7f8fb;
  }

  :global(.tablet) {
    section {
      max-width: calc(100% - 40px);
      padding: 40px 48px;
    }

    img {
      right: -40%;
    }
  }

  :global(.phone-xs),
  :global(.phone) {
    section {
      max-width: calc(100% - 30px);
      flex-direction: column;
      border-radius: 6px;
      padding: 0;
    }

    .text {
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 40px 29.5px;
    }

    .condition {
      margin-bottom: 40px;
    }

    .btn {
      --margin: 24px;
      --v-padding: 7px;
      --h-padding: 20.5px;
    }

    .note {
      max-width: 224px;
      margin: auto;
    }

    img {
      position: static;
      height: 336px;
      transform: translateX(125px);
    }
  }
</style>
