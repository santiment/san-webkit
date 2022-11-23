<script>import Svg from './../../ui/Svg/svelte';
import SearchInput from './SearchInput.svelte';
export let show;
export let searchTerm;</script>

<div class="wrapper row v-center mrg-l mrg--b">
  <button class="arrow btn row hv-center mrg-s mrg--r" on:click={() => (show = false)}>
    <Svg id="arrow-left-big" w="11" h="18" />
  </button>
  <div class="relative fluid input-wrapper">
    <SearchInput bind:searchTerm />
  </div>
</div>

<style >.wrapper {
  padding-left: 8px;
  padding-right: 20px;
}

.arrow {
  height: 40px;
  min-width: 40px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.arrow:focus, .arrow:visited, .arrow:active {
  outline: none;
}

.input-wrapper {
  flex-basis: 100%;
}
.input-wrapper::placeholder {
  color: var(--waterloo);
}</style>
