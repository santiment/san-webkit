<script>import { IsPhone } from './../../../stores/responsive';
import sanTokenBanner from './sanTokenBanner.svg';
import sanTokenBannerDesktop from './sanTokenBannerDesktop.svg';
let className = '';
export { className as class };</script>

<section class="row justify v-center border body-2 relative {className}">
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

  <img src={$IsPhone ? sanTokenBanner : sanTokenBannerDesktop} alt="San Token Banner" />
</section>

<style >section {
  max-width: 100%;
  width: 1140px;
  background: var(--whale);
  border-radius: 8px;
  padding: 40px 89px 48px 72px;
  margin: 0 auto 80px;
  overflow: hidden;
}

.text {
  max-width: 100%;
  width: 472px;
}

h3 {
  color: var(--rhino);
}

img {
  position: absolute;
  right: 89px;
  bottom: 0;
}

p {
  color: var(--fiord);
}

.buy {
  display: inline-block;
  padding: 8px 20px;
}

:global(.tablet) section {
  max-width: calc(100% - 40px);
  padding: 40px 48px;
}
:global(.tablet) img {
  right: -90px;
  width: 432px;
}
:global(.tablet) .text {
  width: 402px;
}

:global(.phone-xs) section,
:global(.phone) section {
  flex-direction: column-reverse;
  padding: 32px 24px;
  max-width: calc(100% - 40px);
  gap: 35px;
  text-align: center;
}
:global(.phone-xs) .learn,
:global(.phone) .learn {
  display: inline;
}
:global(.phone-xs) p,
:global(.phone) p {
  margin: 0 0 32px;
}
:global(.phone-xs) img,
:global(.phone) img {
  position: static;
}</style>
