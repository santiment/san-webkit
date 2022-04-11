<script>
    export let items = []
    export let hasAllWithLabel;
    export let onChange = (index, value) => {}
    let className = ''
    export {className as class}
    export let style;

    let index = 0;
    $: if (hasAllWithLabel) items = [...items, hasAllWithLabel]

    function clickHandler() {
        index += 1;
        if (index + 1 > items.length) {
            index = 0
        }
        onChange(index, items[index])
    }
</script>

<button class="btn btn-2 {className}" on:click={clickHandler} {style}>
    {items[index]}
</button>

<style>
button {
    --v-padding: 6px;
    --h-padding: 12px;
}
</style>