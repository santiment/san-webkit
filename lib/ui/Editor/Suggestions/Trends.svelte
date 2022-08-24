<script>
  import Svg from './../../../ui/Svg/svelte'
  import Suggestions from './Suggestions.svelte'
  export let searchTerm = ''
  export const href = () => 'https://app.santiment.net/labs/trends/explore/' + searchTerm
  export const label = () => '#' + searchTerm
  let items = [0]
</script>

<Suggestions {...$$props} {items}>
  <div class="c-black">
    <Svg id="fire" w="12" h="15" class="svg-1VqsPa mrg-xs mrg--r" />
    Link trend
  </div>
</Suggestions>

<style>
  :global(.svg-1VqsPa) {
    fill: var(--black);
    margin-top: -2px;
  }
</style>
