<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
</script>

<span class="check mrg-m mrg--r">
  <Svg id="checkmark-circle-filled" w="24" />
</span>

<style>
  .check {
    position: relative;
    fill: var(--check);
    align-self: flex-start;
  }
  .check::after {
    content: '';
    position: absolute;
    left: 20%;
    top: 22%;
    width: 60%;
    height: 60%;
    background: var(--check-fill);
    z-index: -1;
  }
</style>
