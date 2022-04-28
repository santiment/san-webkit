<script>
  import Svg from '@/ui/Svg/svelte'

  let className = 'mrg-a mrg--l'
  export { className as class }
  export let light = false
  export let disabled = false
</script>

<div class="check hv-center {className}">
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
