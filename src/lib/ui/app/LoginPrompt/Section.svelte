<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  let className = ''
  export { className as class }
  export let title
  export let titleMargin = 'mrg-l'
  export let bottomLabel = undefined
  export let bottomAction = undefined
  export let bottomHref = undefined

  const { device } = useDeviceCtx()
</script>

<section class="h-center border column {className}">
  <h2 class="h4 {titleMargin} mrg--b">{title}</h2>

  {#if device.$.isMobile}
    <a href="/" class="close btn"><Svg id="close" w="16" /></a>
  {/if}

  <slot />

  {#if bottomLabel}
    <div class="body-2 c-waterloo mrg-m mrg--t">
      {bottomLabel}
      <a href={bottomHref} class="link-pointer" on:click>{bottomAction}</a>
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    padding: 24px;
    text-align: center;
    position: relative;
  }

  /* :global(.desktop) section { */
  /*   padding: 39px 99px; */
  /*   min-width: 480px; */
  /*   display: block; */
  /* } */

  /* :global(body:not(.desktop)) section { */
  /*   align-self: flex-start; */
  /*   height: 85vh; */
  /*   flex: 1; */
  /* } */

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
</style>
