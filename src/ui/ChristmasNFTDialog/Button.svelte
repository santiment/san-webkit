<script>
  import Svg from '@/ui/Svg/svelte'
  import { trackNftBattleCTA } from '@/analytics/events/nftbattle'
  import { dataPreloader, showChristmasNFTDialog } from './Dialog.svelte'
  import buttonSvg from './button.svg'

  let className = ''
  export { className as class }
  export let source = 'navbar'
  export let isWinner = false
  export let props

  function onClick() {
    showChristmasNFTDialog(props)
    trackNftBattleCTA(source)
  }
</script>

<button class="btn-1 btn--s v-center {className}" use:dataPreloader on:click={onClick}>
  {#if isWinner}
    <Svg id="rocket" w="13" h="18" />
    Check Winners
  {:else}
    <img src={buttonSvg} alt="Time" />
    Time’s Up
  {/if}
</button>

<style>
  button {
    display: inline-flex;
    gap: 10px;
    --accent: var(--blue);
    --accent-hover: var(--blue-hover);
  }
</style>
