<script>import Svg from './../../ui/Svg/svelte';
let className = '';
export { className as class };</script>

<div class="check hv-center mrg-a mrg--l {className}">
  <Svg id="checkmark" w="8" h="6" />
</div>

<style>
  .check {
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: var(--green);
    fill: #fff;
  }
</style>
