<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let small = false
</script>

<span class="check mrg-m mrg--r">
  <Svg id="checkmark-circle-filled" w={small ? 16 : 24} />
</span>

<style>
  .check {
    position: relative;
    fill: var(--check, var(--green-light-1));
    align-self: flex-start;
  }
  .check::after {
    content: '';
    position: absolute;
    left: 20%;
    top: 22%;
    width: 60%;
    height: 60%;
    background: var(--check-fill, var(--green));
    z-index: -1;
  }
</style>
