<script>let className = '';
export { className as class };
export let items = [];
export let selectedIndex = 0;
export let onChange = value => {};

function onClick() {
  selectedIndex = ++selectedIndex % items.length;
  onChange(items[selectedIndex]);
}</script>

<button class="btn-2 btn--s {className}" on:click={onClick}>
    {items[selectedIndex]}
</button>
