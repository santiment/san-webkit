<script>export let style = '';
export let onDragStart;
let itemNode;
$: if (itemNode) {
    itemNode.setAttribute('style', style);
}
function gridItem(node) {
    itemNode = node;
    node.addEventListener('mousedown', onDragStart);
    node.classList.add('snap-item');
    return;
}
</script>

<slot {gridItem} />
