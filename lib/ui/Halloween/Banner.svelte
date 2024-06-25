<script>import Svg from './../../ui/Svg/svelte';
</script>

<div class="wrapper column fluid relative txt-left">
  <Svg illus id="halloween/halloween-banner" w="706" h="320" class="banner-L4mHii" />
  <Svg illus id="santiment" w="97" h="18" class="" />
  <Svg illus id="halloween/halloween-sales" w="181" h="18" class="sales-PPRYgz" />
  <h2 class="txt-b">27% Off</h2>
  <p class="body-2 txt-m mrg-xs mrg--b">Play by the rules:</p>
  <p class="body-2 rules">
    Collect pumpkins that we hide on app.sanbase and get <u>27% discount</u>. Want more? Find our
    special offer, <u>54% off</u> for all Santiment products. Hurry up! Promo code will be valid
    till the <u>5th of November</u>
  </p>
</div>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.wrapper {
  overflow: hidden;
  max-width: 1140px;
  height: 320px;
  padding: 28px 0 32px 48px;
  background-color: var(--athens);
  margin: 40px auto 8px;
  border-radius: 6px;
}

:global(.banner-L4mHii) {
  position: absolute;
  top: 0;
  right: 0;
}

:global(.sales-PPRYgz) {
  margin: 28px 0 6px;
}

h2 {
  font-size: 60px;
  line-height: 73px;
  margin: auto auto 14px 0;
}

p {
  max-width: 425px;
  line-height: 22px;
}

.rules {
  line-height: 20px;
  color: var(--fiord);
}

u {
  text-decoration: underline;
}</style>
