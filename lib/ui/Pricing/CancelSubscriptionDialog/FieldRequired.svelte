<script>import Svg from './../../../ui/Svg/svelte';</script>

<span class="box border caption txt-m row v-center c-fiord nowrap mrg-s mrg--l">
  <Svg id="error" w="16" class="mrg-s mrg--r" />
  This field is required
</span>

<style>
  span {
    fill: var(--red);
    padding: 6px 10px;
    visibility: var(--error, hidden);
  }
</style>
