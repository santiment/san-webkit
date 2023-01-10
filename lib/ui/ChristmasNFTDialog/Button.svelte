<script>import { trackNftBattleCTA } from './../../analytics/events/nftbattle';
import { dataPreloader, showChristmasNFTDialog } from './Dialog.svelte';
import buttonSvg from './button.svg';
let className = '';
export { className as class };
export let source = 'navbar';
function onClick() {
  showChristmasNFTDialog();
  trackNftBattleCTA(source);
}</script>

<button class="btn-1 btn--s v-center {className}" use:dataPreloader on:click={onClick}>
  <img src={buttonSvg} alt="Time" />
  Time’s Up
</button>

<style>
  button {
    display: inline-flex;
    gap: 10px;
    --accent: var(--blue);
    --accent-hover: var(--blue-hover);
  }
</style>
