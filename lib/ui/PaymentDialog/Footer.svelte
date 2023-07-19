<script>import Svg from './../../ui/Svg/svelte';
</script>

<section class="footer row h-center caption txt-m c-waterloo">
  <Svg id="locked-filled" w="11" h="14" class="mrg-s mrg--r" /> Fully secured checkout
  <div class="break" />
  <Svg id="dollar" w="13" h="14" class="mrg-s mrg--r" /> 30 day money back guarantee
</section>

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
.footer {
  fill: var(--casper);
  background: var(--athens);
  padding: 15px 24px;
}

.break {
  margin: 0 23px;
}

:global(body:not(.desktop)) .footer {
  padding: 16px;
}
:global(body:not(.desktop)) .break {
  margin: 0 12px;
}</style>
