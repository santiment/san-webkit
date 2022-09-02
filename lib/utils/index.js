function newCopyNode(text) {
    const node = document.createElement('textarea');
    node.value = text;
    node.setAttribute('style', 'position:absolute;left:-100vh');
    document.body.appendChild(node);
    return node;
}
export function copy(text, callback, timeout = 1000, node) {
    const shouldRemoveNode = !node;
    node = node || newCopyNode(text);
    node.select();
    document.execCommand('copy');
    if (shouldRemoveNode)
        node.remove();
    const timer = setTimeout(callback, timeout);
    return () => clearTimeout(timer);
}
export const map = (target, valueMin, valueMax, targetMin, targetMax) => targetMin + ((target - valueMin) * (targetMax - targetMin)) / (valueMax - valueMin);
//# sourceMappingURL=index.js.map