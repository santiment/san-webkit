<script>import Svg from './../../ui/Svg/svelte';
import InputWithIcon from './../../ui/InputWithIcon.svelte';
export let searchTerm;

function onInput({
  currentTarget
}) {
  searchTerm = currentTarget.value.trim();
}</script>

<InputWithIcon
  value={searchTerm}
  on:input={onInput}
  placeholder="Search for assets, trends..."
  big
  class="input-1QmQAC body-2"
>
  <div class="search row hv-center" slot="left">
    <Svg id="search" w="12" />
  </div>
  {#if searchTerm}
    <button class="btn close row hv-center" on:click={() => (searchTerm = '')}>
      <Svg id="close" w="12" />
    </button>
  {/if}
</InputWithIcon>

<style >:global(.input-1QmQAC) {
  --left: 36px !important;
}
:global(.input-1QmQAC) > :global(input) {
  padding: 8px 44px 8px 36px;
}

.search {
  height: 16px;
  width: 16px;
  position: absolute;
  top: 11px;
  left: 11px;
  fill: var(--waterloo);
}

.close {
  fill: var(--waterloo);
  height: 32px;
  width: 32px;
  position: absolute;
  top: 3px;
  right: 4px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.close:focus, .close:visited, .close:active {
  outline: none;
}</style>
