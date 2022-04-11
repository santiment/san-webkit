<script>
    export let items = []
    export let hasAllWithLabel;
    export let selectedIndex = 0
    export let onChange = value => {}
    export {className as class}

    let className = ''
    items = hasAllWithLabel ? [...items, hasAllWithLabel] : items

    function onClick() {
        selectedIndex = ++selectedIndex % items.length
        onChange(items[selectedIndex])
    }
</script>

<button class="btn-2 btn--s {className}" on:click={onClick}>
    {items[selectedIndex]}
</button>

<style>
button {
    --v-padding: 6px;
}
</style>