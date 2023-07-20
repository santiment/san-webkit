<script>import { FILTER_ITEMS } from './utils';
export let type;
</script>

<div class="wrapper row v-center justify body-2">
  {#each Object.keys(FILTER_ITEMS) as item}
    <button class:active={type === item} on:click={() => (type = item)}>
      {FILTER_ITEMS[item]}
    </button>
  {/each}
</div>
<div class="divider" />

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.wrapper {
  padding: 20px 20px 0;
}

.divider {
  height: 1px;
  background: var(--porcelain);
  margin: -1px 20px 0;
}

button {
  --color: var(--waterloo);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding-bottom: 10px;
}
button:focus, button:visited, button:active {
  outline: none;
}

.active {
  --color: var(--green);
  padding-bottom: 8px;
  border-bottom: 2px solid var(--green);
}</style>
