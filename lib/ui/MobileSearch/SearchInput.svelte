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
<<<<<<< HEAD
  class="input-HVeQ61 body-2"
=======
  class="input-30A2Qn body-2"
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
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

<<<<<<< HEAD
<style >:global(.input-HVeQ61) {
  --left: 36px !important;
}
:global(.input-HVeQ61) > :global(input) {
=======
<style >:global(.input-30A2Qn) {
  --left: 36px !important;
}
:global(.input-30A2Qn) > :global(input) {
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
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
