<script>import Svg from './../../ui/Svg/svelte';
import { dataPreloader, showChristmasNFTDialog } from './Dialog.svelte';
let className = '';
export { className as class };</script>

<button
  class="btn-1 btn--s v-center {className}"
  use:dataPreloader
  on:click={() => showChristmasNFTDialog()}
>
  <Svg id="rocket" w="10.5" h="14" />
  Win NFT</button
>

<style>
  button {
    display: inline-flex;
    gap: 10px;
    --accent: var(--blue);
    --accent-hover: var(--blue-hover);
  }
</style>
